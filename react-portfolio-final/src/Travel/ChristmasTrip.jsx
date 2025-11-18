// src/Travel/ChristmasTrip.jsx
import { Link } from 'react-router-dom'
import '../styles/TravelPost.css'
import travelPlaceholder from '../assets/profile.jpg'

export default function ChristmasTrip() {
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
              alt="Christmas trip placeholder"
              className="travel-post-photo"
            />
            <div className="travel-post-photo-tape tape-top-left" />
            <div className="travel-post-photo-tape tape-top-right" />
            <div className="travel-post-photo-tape tape-bottom-left" />
          </div>

          <div className="travel-post-hero-text">
            <h1 className="travel-post-title">
              UPCOMING: Christmas trip – trains, markets and cold noses
            </h1>
            <div className="travel-post-meta-row">
              <span className="travel-post-chip">Location · Central Europe</span>
              <span className="travel-post-chip">Season · Winter 2025</span>
              <span className="travel-post-chip">Status · Upcoming</span>
            </div>
            <p className="travel-post-summary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. This page
              is a placeholder for a winter trip – hot drinks, layered clothes
              and cities full of lights. Once you go, this becomes the place
              for the story.
            </p>
          </div>
        </section>

        <section className="travel-post-body">
          <article className="travel-post-section">
            <h2 className="travel-post-section-title">
              Why I wanted to take this trip
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              volutpat metus lectus, id pulvinar lacus aliquam eu.
            </p>
          </article>

          <article className="travel-post-section">
            <h2 className="travel-post-section-title">
              Cities I&apos;m thinking about
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sagittis, tortor et pretium luctus, augue est suscipit enim, a
              ullamcorper felis enim sed orci.
            </p>
          </article>

          <article className="travel-post-section">
            <h2 className="travel-post-section-title">
              Things I imagine will stand out
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              cursus, odio eget condimentum sodales, lorem velit malesuada est.
            </p>
          </article>

          <article className="travel-post-section">
            <h2 className="travel-post-section-title">
              Space for future memories
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              varius metus a ligula fringilla, non mollis neque interdum.
            </p>
          </article>
        </section>

        <footer className="travel-post-footer">
          <p>
            After the Christmas trip, you can replace each heading and paragraph
            with real stories – keeping the scrapbook layout the same.
          </p>
        </footer>
      </div>
    </main>
  )
}
