function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

async function getGraphAccessToken() {
  const { MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET } = process.env
  if (!MS_TENANT_ID || !MS_CLIENT_ID || !MS_CLIENT_SECRET) {
    throw new Error('Missing MS_TENANT_ID, MS_CLIENT_ID, or MS_CLIENT_SECRET')
  }

  const body = new URLSearchParams({
    client_id: MS_CLIENT_ID,
    client_secret: MS_CLIENT_SECRET,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  })

  const tokenRes = await fetch(
    `https://login.microsoftonline.com/${MS_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    },
  )

  const tokenData = await tokenRes.json()
  if (!tokenRes.ok || !tokenData.access_token) {
    console.error('Microsoft token error:', tokenData)
    throw new Error(tokenData.error_description || 'Failed to get Microsoft access token')
  }

  return tokenData.access_token
}

async function sendMailViaGraph({ subject, html, replyTo }) {
  const contactTo = process.env.CONTACT_TO || process.env.SMTP_USER || 'partner@jamaaglobal.com'
  const smtpUser = process.env.SMTP_USER || contactTo
  const accessToken = await getGraphAccessToken()

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(smtpUser)}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {
          subject,
          body: {
            contentType: 'HTML',
            content: html,
          },
          toRecipients: [{ emailAddress: { address: contactTo } }],
          replyTo: [{ emailAddress: { address: replyTo } }],
        },
        saveToSentItems: true,
      }),
    },
  )

  if (!res.ok) {
    const errBody = await res.text()
    console.error('Graph sendMail error:', res.status, errBody)
    throw new Error(`Graph sendMail failed (${res.status}): ${errBody}`)
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required' })
  }

  const safeName = String(name).trim()
  const safeEmail = String(email).trim()
  const safeMessage = String(message).trim()

  if (!safeName || !safeEmail || !safeMessage) {
    return res.status(400).json({ error: 'name, email and message are required' })
  }

  const htmlBody = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(safeMessage).replace(/\n/g, '<br>')}</p>
  `

  try {
    await sendMailViaGraph({
      subject: `New website enquiry from ${safeName}`,
      html: htmlBody,
      replyTo: safeEmail,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact form email failed:', err)
    return res.status(500).json({
      error: 'Failed to send message',
      detail: String(err?.message || err),
    })
  }
}
