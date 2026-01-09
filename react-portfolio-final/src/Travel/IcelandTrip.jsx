// src/Travel/IcelandTrip.jsx
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

export default function IcelandTrip() {
  const pageClass = 'iceland-trip-page'
  const chips = ['Iceland', 'Wild landscapes', 'Trip journal']

  const title = 'Iceland — ice air and quiet awe'
  const subtitle =
    'Clean notes, big horizons, and tiny details that made the days feel unreal.'
  const heroCaption =
    'Swap this for your best Iceland photo — a wide shot works beautifully.'

  const heroImage = travelPlaceholder
  const inlineImage = travelPlaceholder

  const notes = [
    { label: 'Vibe', value: 'Cold light, dramatic skies, calm' },
    { label: 'Best moment', value: 'A view that made you go silent' },
    { label: 'Soundtrack', value: 'A track you played on repeat' },
    { label: 'Next time', value: 'Add one thing you’ll do differently' },
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
              alt="Iceland trip hero"
              className="travel-hero-image"
            />
          </div>
          <p className="travel-hero-caption">{heroCaption}</p>
        </section>

        <section className="travel-body">
          <article className="travel-article">
            <p className="travel-intro">
              Iceland felt like stepping into a different texture of the world —
              sharper air, bigger silence, and landscapes that don’t look real
              until you’re standing inside them.
            </p>

            <div className="travel-rule" />

            <section className="travel-section">
              <h2 className="travel-h2">The rhythm</h2>
              <p className="travel-p">
                Write how the days flowed: early starts? road stops? slow cafés
                between weather shifts? Keep it sensory and simple.
              </p>

              <div className="travel-quote">
                <p>“The quiet here isn’t empty — it’s full.”</p>
                <cite>— Field note</cite>
              </div>

              <p className="travel-p">
                Add one practical memory: what you packed, what you learned
                about moving around, what surprised you.
              </p>
            </section>

            <section className="travel-section">
              <h2 className="travel-h2">Where we wandered</h2>
              <p className="travel-p">
                List a few places but describe how they *felt*. Wind, mist,
                colour, light, distance.
              </p>

              <div className="travel-image-block">
                <img
                  src={inlineImage}
                  alt="Iceland detail"
                  className="travel-image"
                />
                <p className="travel-image-note">
                  Use a “detail” photo here: boots on gravel, hot drink, sea
                  spray, fog on glass.
                </p>
              </div>
            </section>

            <section className="travel-section">
              <h2 className="travel-h2">Little moments</h2>
              <p className="travel-p">
                Tiny scenes: a petrol station snack, the smell after rain, the
                sound of water everywhere, a quick laugh in the cold.
              </p>
            </section>

            <section className="travel-section">
              <h2 className="travel-h2">Next time</h2>
              <p className="travel-p">
                One promise: come back slower, stay longer, chase one region
                properly. Keep it short.
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
          <p>Swap placeholders for real photos and this instantly looks finished.</p>
        </footer>
      </div>
    </main>
  )
}
