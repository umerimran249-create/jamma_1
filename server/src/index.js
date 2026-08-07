import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const app = express()
const PORT = process.env.PORT || 4000

const CONTACT_TO = process.env.CONTACT_TO || process.env.SMTP_USER || 'partner@jamaaglobal.com'
const SMTP_USER = process.env.SMTP_USER || CONTACT_TO

app.use(cors())
app.use(express.json())

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

async function sendMailViaGraph({ subject, text, html, replyTo }) {
  const accessToken = await getGraphAccessToken()
  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(SMTP_USER)}/sendMail`,
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
          toRecipients: [
            { emailAddress: { address: CONTACT_TO } },
          ],
          replyTo: [
            { emailAddress: { address: replyTo } },
          ],
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

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() })
})

app.post('/api/contact', async (req, res) => {
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

  const subject = `New website enquiry from ${safeName}`
  const textBody = [
    'New website enquiry',
    '',
    `Name: ${safeName}`,
    `Email: ${safeEmail}`,
    '',
    'Message:',
    safeMessage,
  ].join('\n')

  const htmlBody = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(safeMessage).replace(/\n/g, '<br>')}</p>
  `

  try {
    await sendMailViaGraph({
      subject,
      text: textBody,
      html: htmlBody,
      replyTo: safeEmail,
    })
    res.json({ ok: true })
  } catch (err) {
    console.error('Contact form email failed:', err)
    res.status(500).json({
      error: 'Failed to send message',
      detail: String(err?.message || err),
    })
  }
})

const clientDist = path.resolve(__dirname, '../../client/dist')
app.use(express.static(clientDist))
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
