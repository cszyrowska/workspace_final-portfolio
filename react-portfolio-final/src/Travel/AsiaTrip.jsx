// src/Travel/AsiaTrip.jsx
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

export default function AsiaTrip() {
  const pageClass = 'asia-trip-page'
  const chips = ['UPCOMING', 'Asia', 'Slow travel']

  const title = 'UPCOMING: Asia — long routes and slow days'
  const subtitle =
    'A placeholder page, kept elegant: what I want from this trip and how I’m imagining it.'
  const heroCaption =
    'Swap the hero to an inspiration image: a map, a street scene, a mood photo.'

  const heroImage = travelPlaceholder
  const inlineImage = travelPlaceholder

  const notes = [
    { label: 'Intent', value: 'Move slowly, stay longer, notice more' },
    { label: 'Focus', value: 'Food, movement, neighbourhood life' },
    { label: 'Dream detail', value: 'A morning routine somewhere new' },
    { label: 'Non-negotiable', value: 'One dance class / week (if possible)' },
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
              alt="Asia trip inspiration hero"
              className="travel-hero-image"
            />
          </div>
          <p className="travel-hero-caption">{heroCaption}</p>
        </section>

        <section className="travel-body">
          <article className="travel-article">
            <p className="travel-intro">
              This is the page I’m keeping ready — not as a plan, but as a mood.
              I want this trip to be slower than the others, with days that feel
              lived-in instead of rushed.
            </p>

            <div className="travel-rule" />

            <section className="travel-section">
              <h2 className="travel-h2">What I want from it</h2>
              <p className="travel-p">
                Movement, food, and ordinary life. Less “top 10 sights”, more
                routines: morning walks, local markets, a studio class, writing
                at the end of the day.
              </p>

              <div className="travel-quote">
                <p>“I want to travel like I belong there for a while.”</p>
                <cite>— Field note</cite>
              </div>
            </section>

            <section className="travel-section">
              <h2 className="travel-h2">Loose route ideas</h2>
              <p className="travel-p">
                Add 2–4 route thoughts here, but keep it soft and changeable.
                Think: regions, seasons, rhythms — not strict scheduling.
              </p>

              <div className="travel-image-block">
                <img
                  src={inlineImage}
                  alt="Route inspiration"
                  className="travel-image"
                />
                <p className="travel-image-note">
                  Inspiration photo: street food, train window, map scribbles,
                  neon, dawn light.
                </p>
              </div>
            </section>

            <section className="travel-section">
              <h2 className="travel-h2">Things I want to learn</h2>
              <p className="travel-p">
                A few personal goals: confidence in new places, new movement
                styles, learning to be patient with distance and time.
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
          <p>
            Keep this page clean until the trip happens — then swap placeholders
            for real images and rewrite the sections.
          </p>
        </footer>
      </div>
    </main>
  )
}
