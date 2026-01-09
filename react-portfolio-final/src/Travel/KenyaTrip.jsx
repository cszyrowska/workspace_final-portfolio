// src/Travel/KenyaTrip.jsx
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

export default function KenyaTrip() {
  const pageClass = 'kenya-trip-page'
  const chips = ['Kenya', 'Safari + coast', 'Summer 2023']

  const title = 'Kenya — sunset dust and soft ocean evenings'
  const subtitle =
    'A trip that changed my pace: early light, long roads, and colour everywhere.'
  const heroCaption =
    'Swap this hero image to a wide sunset, savannah, or coastline shot.'

  const heroImage = travelPlaceholder
  const inlineImage = travelPlaceholder

  const notes = [
    { label: 'Vibe', value: 'Warm air, big skies, golden hours' },
    { label: 'Best moment', value: 'That one sunset you still see' },
    { label: 'Soundtrack', value: 'A song you associate with the trip' },
    { label: 'Next time', value: 'One place you’d return to first' },
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
              alt="Kenya trip hero"
              className="travel-hero-image"
            />
          </div>
          <p className="travel-hero-caption">{heroCaption}</p>
        </section>

        <section className="travel-body">
          <article className="travel-article">
            <p className="travel-intro">
              Kenya felt cinematic in the best way — not because of the big
              moments alone, but because the small scenes were so vivid: dust in
              the air, warm light, quiet laughter in the car.
            </p>

            <div className="travel-rule" />

            <section className="travel-section">
              <h2 className="travel-h2">The rhythm</h2>
              <p className="travel-p">
                Safari mornings and slow afternoons. Write how the day moved:
                early wake-ups, heat settling in, evenings softening into gold.
              </p>

              <div className="travel-quote">
                <p>“The sky changed colour like it was doing it on purpose.”</p>
                <cite>— Field note</cite>
              </div>
            </section>

            <section className="travel-section">
              <h2 className="travel-h2">Where we wandered</h2>
              <p className="travel-p">
                Describe places through texture: the road, the air, the sounds.
                Keep it editorial — less “what we did”, more “what it felt like”.
              </p>

              <div className="travel-image-block">
                <img src={inlineImage} alt="Kenya detail" className="travel-image" />
                <p className="travel-image-note">
                  Add a detail photo: jewellery, fabric, fruit, hands, sand.
                </p>
              </div>
            </section>

            <section className="travel-section">
              <h2 className="travel-h2">Little moments</h2>
              <p className="travel-p">
                A look out the window. A market stall. The smell of grilled food.
                A moment of being very small in a huge landscape.
              </p>
            </section>

            <section className="travel-section">
              <h2 className="travel-h2">Next time</h2>
              <p className="travel-p">
                Come back slower. Spend longer on the coast. Plan one extra day
                that’s unstructured.
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
          <p>Swap in your Kenya photos and this becomes instantly “magazine”.</p>
        </footer>
      </div>
    </main>
  )
}
