// src/Travel/AsiaTrip.jsx
import { Link } from 'react-router-dom'
import '../styles/TravelPost.css'
import travelPlaceholder from '../assets/profile.jpg'

export default function AsiaTrip() {
  return (
    <main className="travel-post-page">
      <div className="travel-post-inner">
        <header className="travel-post-header">
          <Link to="/" className="travel-post-back">
            ← Back to portfolio
          </Link>
          <p className="travel-post-label">Travel journal · UPCOMING</p>
        </header>

        <section className="travel-post-hero">
          <div className="travel-post-photo-wrap">
            <img
              src={travelPlaceholder}
              alt="Asia trip placeholder"
              className="travel-post-photo"
            />
            <div className="travel-post-photo-tape tape-top-left" />
            <div className="travel-post-photo-tape tape-top-right" />
            <div className="travel-post-photo-tape tape-bottom-left" />
          </div>

          <div className="travel-post-hero-text">
            <h1 className="travel-post-title">
              UPCOMING: Asia – long routes and slow days
            </h1>
            <div className="travel-post-meta-row">
              <span className="travel-post-chip">Location · Asia</span>
              <span className="travel-post-chip">Season · To be decided</span>
              <span className="travel-post-chip">Status · Future plan</span>
            </div>
            <p className="travel-post-summary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is
              the dream of a longer, slower trip: new food, new cities and a
              different rhythm of days. For now, it&apos;s a blank page waiting
              for real stories.
            </p>
          </div>
        </section>

        <section className="travel-post-body">
          <article className="travel-post-section">
            <h2 className="travel-post-section-title">
              Why Asia is on my mind
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              volutpat metus lectus, id pulvinar lacus aliquam eu.
            </p>
          </article>

          <article className="travel-post-section">
            <h2 className="travel-post-section-title">
              Loose ideas for routes
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sagittis, tortor et pretium luctus, augue est suscipit enim, a
              ullamcorper felis enim sed orci.
            </p>
          </article>

          <article className="travel-post-section">
            <h2 className="travel-post-section-title">
              Things I imagine learning
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              cursus, odio eget condimentum sodales, lorem velit malesuada est.
            </p>
          </article>

          <article className="travel-post-section">
            <h2 className="travel-post-section-title">
              Space for future notes
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              varius metus a ligula fringilla, non mollis neque interdum.
            </p>
          </article>
        </section>

        <footer className="travel-post-footer">
          <p>
            When this Asia trip becomes real, this page is already set up for a
            full scrap-book entry – you just drop in photos and rewrite the
            text.
          </p>
        </footer>
      </div>
    </main>
  )
}
