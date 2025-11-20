// src/components/ContactSection.jsx
import '../styles/Contact.css'

const CONTACT_LINKS = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:hello@cszyrowska.com', // ← change to your real email
    glyph: '@',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/your.instagram', // ← update
    glyph: 'IG',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/your-linkedin', // ← update
    glyph: 'in',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com/your.facebook', // ← update
    glyph: 'f',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com/@yourchannel', // ← update
    glyph: '▶',
  },
]

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <header className="contact-header">
        <p className="contact-label">Contact</p>
        <h2 className="contact-heading">Contact me.</h2>
      </header>

      <div
        className="contact-icon-row"
        aria-label="Contact links"
      >
        {CONTACT_LINKS.map(link => (
          <a
            key={link.id}
            href={link.href}
            className="contact-icon-link"
            target={link.id === 'email' ? undefined : '_blank'}
            rel={link.id === 'email' ? undefined : 'noreferrer'}
            aria-label={link.label}
          >
            <span className="contact-icon-circle">
              <span className="contact-icon-glyph">{link.glyph}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
