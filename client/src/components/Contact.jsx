import { useState } from 'react'

// Contact (page 13): dark section with details + brand/socials, plus a
// functional message form wired to the Express backend (/api/contact).
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('failed')
      setStatus({ type: 'ok', text: 'Thank you for reaching out! We will contact you shortly.' })
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus({ type: 'err', text: 'Something went wrong. Please try again or email us directly.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-grid">
        <div>
          <h2 className="display title">Contact</h2>
          <p className="connect">Connect with our advisory team.</p>
          <p className="blurb">
            Whether you're improving operational performance, transforming finance functions, or
            planning your next strategic initiative, JAMAA Global is ready to support your journey.
          </p>
          <p className="office">Dubai Office</p>
          <div className="contact-details">
            <p>
              <img className="contact-icon" src="/images/icon-location.png" alt="" />
              <span>Meydan Free Zone, 6th Floor, Meydan Grandstand, Meydan Road, Nad Al Sheba 1, Dubai, United Arab Emirates</span>
            </p>
            <p>
              <img className="contact-icon" src="/images/icon-phone.png" alt="" />
              +971 56 603 0885
            </p>
            <p>
              <img className="contact-icon" src="/images/icon-email.png" alt="" />
              partner@jamaa-global.com
            </p>
            <p>
              <img className="contact-icon" src="/images/icon-web.png" alt="" />
              www.jamaa-global.com
            </p>
          </div>
        </div>

        <div className="contact-brand">
          <img src="/images/logo.png" alt="JAMAA — Building Better Business" />
          <div className="socials">
            <a href="#" aria-label="Instagram"><img src="/images/icon-instagram.png" alt="" /></a>
            <a href="#" aria-label="Facebook"><img src="/images/icon-facebook.png" alt="" /></a>
            <a href="#" aria-label="LinkedIn"><img src="/images/icon-linkedin.png" alt="" /></a>
            <a href="#" aria-label="Twitter"><img src="/images/icon-twitter.png" alt="" /></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <h3>Send a Message</h3>
          <div className="row">
            <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={update} />
            <input type="email" name="email" placeholder="Your Email" required value={form.email} onChange={update} />
          </div>
          <textarea rows="4" name="message" placeholder="Your Message" required value={form.message} onChange={update} />
          <button type="submit" className="btn btn-gold" disabled={submitting}>
            {submitting ? 'Sending...' : 'Submit Inquiry'}
          </button>
          {status && <p className={`form-status ${status.type}`}>{status.text}</p>}
        </form>
      </div>
    </section>
  )
}
