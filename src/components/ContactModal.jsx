import { useState } from 'react'

const projectTypes = ['Website', 'App', 'Branding', 'Design', 'Strategy', 'Content']
const budgets = ['Under $10K', '$10K–$25K', '$25K–$50K', '$50K–$100K', '$100K+']
const sources = ['Instagram', 'Google', 'Referral', 'LinkedIn', 'X / Twitter', 'Other']

function ChipGroup({ label, options, value, onChange }) {
  return (
    <div className="form-group">
      <p className="chip-label">{label}</p>
      <div className="chip-row">
        {options.map((opt) => (
          <button
            type="button"
            key={opt}
            className={`chip ${value === opt ? 'is-active' : ''}`}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ContactModal({ open, onClose }) {
  const [projectType, setProjectType] = useState(null)
  const [budget, setBudget] = useState(null)
  const [source, setSource] = useState(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className={`contact-modal ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="contact-modal__scrim" onClick={onClose} />
      <div className="contact-modal__panel" role="dialog" aria-modal="true" aria-label="Contact form">
        <button className="contact-modal__close" onClick={onClose} aria-label="Close contact form">✕</button>
        <h2>Let&rsquo;s work together</h2>

        {sent ? (
          <p className="contact-modal__success">
            Thanks — that&rsquo;s in. We reply to every inquiry within one business day.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Full name</label>
              <input id="name" name="name" type="text" placeholder="Full name *" required minLength={2} maxLength={50} />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" placeholder="Email *" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="sr-only">Project details</label>
              <textarea id="message" name="message" rows={5} placeholder="Describe your project or inquiry *" required minLength={2} maxLength={500} />
            </div>

            <ChipGroup label="How can we help?" options={projectTypes} value={projectType} onChange={setProjectType} />
            <ChipGroup label="What's your budget?" options={budgets} value={budget} onChange={setBudget} />
            <ChipGroup label="Where did you hear about us?" options={sources} value={source} onChange={setSource} />

            <button type="submit" className="submit-btn">
              <span>Send message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <p className="privacy-text">By submitting, you agree to be contacted about your project.</p>
          </form>
        )}
      </div>
    </div>
  )
}
