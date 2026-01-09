// src/Travel/ParisTrip.jsx
import { Link } from 'react-router-dom'
import '../styles/TravelPost.css'
import travelPlaceholder from '../assets/profile.jpg'

function LanternMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2c2.8 0 5 2.2 5 5v2.1c0 .7.3 1.3.8 1.8l.5.5c.4.4.7 1 .7 1.6V17c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4v-2.9c0-.6.3-1.2.7-1.6l.5-.5c.5-.5.8-1.1.8-1.8V7c0-2.8 2.2-5 5-5Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M9.2 7.2c.6-.8 1.5-1.2 2.8-1.2s2.2.4 2.8 1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M12 10.2c.9 1 .9 1.7 0 2.7c-.9-1-.9-1.7 0-2.7Z"
        fill="#ffffff"
        opacity="0.35"
      />
    </svg>
  )
}

export default function ParisTrip() {
  const pageClass = 'paris-trip-page'
  const chips = ['Paris', 'City days', 'Spring 2026']

  const title = 'Paris — light, metro, and getting lost on purpose'
  const subtitle =
    'A clean, editorial log: the mood, the rhythm, and the little details that made it feel cinematic.'
  const heroCaption =
    'Swap this hero to your strongest Paris photo (wide, clean composition).'

  const heroImage = travelPlaceholder
  const inlineImage = travelPlaceholder

  const notes = [
    { label: 'Vibe', value: 'Soft light, café windows, slow wandering' },
    { label: 'Best moment', value: 'A small corner that felt like yours' },
    { label: 'Soundtrack', value: 'A Paris song / album' },
    { label: 'Next time', value: 'One thing you’d do slower' },
  ]

  return (
    <main className={`travel-post-page ${pageClass}`}>
      <div className="travel-post-inner">
        <div className="travel-topbar">
          <Link to="/" className="travel-back">
            ← Back to portfolio
          </Link>

          <div className="travel-meta">
            {chips.map((chip) => (
              <span key={chip} className="travel-chip">
                {chip}
              </span>
            ))}
          </div>
        </div>

        <header className="travel-header">
          <div className="travel-kicker">
            <LanternMark />
            Travel Journal
          </div>

          <h1 className="travel-title">{title}</h1>
          <p className="travel-subtitle">{subtitle}</p>
        </header>

        <section className="travel-hero">
          <div className="travel-hero-frame">
            <img
              src={heroImage}
              alt="Paris trip hero"
              className="travel-hero-image"
            />
          </div>
          <p className="travel-hero-caption">{heroCaption}</p>
        </section>

        <section className="travel-body">
          <article className="travel-article">
            <p className="travel-intro">
              Paris felt like an old film that somehow still moves fast — métro
              lines, café stops, and streets that invite you to wander without a
              plan.
            </p>

            <div className="travel-rule" />

            <section className="travel-section">
              <h2 className="travel-h2">The rhythm</h2>
              <p className="travel-p">
                A day in Paris: small breakfast, long walking, a museum or a
                neighbourhood, and then a sunset that makes everything look
                edited.
              </p>

              <div className="travel-quote">
                <p>“The city feels best when you stop trying to do it properly.”</p>
                <cite>— Field note</cite>
              </div>
            </section>

            <section className="travel-section">
              <h2 className="travel-h2">Where we wandered</h2>
              <p className="travel-p">
                Mention 2–4 areas and describe the mood in each. Keep it
                magazine-like: light, texture, movement.
              </p>

              <div className="travel-image-block">
                <img
                  src={inlineImage}
                  alt="Paris detail"
                  className="travel-image"
                />
                <p className="travel-image-note">
                  Detail photo idea: coffee cup, metro ticket, book stall, a
                  balcony, a shadow on pavement.
                </p>
              </div>
            </section>

            <section className="travel-section">
              <h2 className="travel-h2">Little moments</h2>
              <p className="travel-p">
                The accordion on a side street, the smell of bakeries, the way
                the light sits on buildings in late afternoon.
              </p>
            </section>

            <section className="travel-section">
              <h2 className="travel-h2">Next time</h2>
              <p className="travel-p">
                One slow park day, one dance class, one evening that’s purely
                unplanned.
              </p>
            </section>
          </article>

          <aside className="travel-aside">
            <h3 className="travel-aside-title">Trip notes</h3>
            <ul className="travel-aside-list">
              {notes.map((item) => (
                <li key={item.label} className="travel-aside-item">
                  <span className="travel-aside-label">{item.label}</span>
                  <p className="travel-aside-value">{item.value}</p>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <footer className="travel-footer">
          <p>Paris looks best with a strong hero image — swap that first.</p>
        </footer>
      </div>
    </main>
  )
}
