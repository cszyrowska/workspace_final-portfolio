// src/travel/TripTemplate.jsx
import { Link } from 'react-router-dom'
import '../styles/TravelPost.css'
import travelPlaceholder from '../assets/profile.jpg' // swap for real photos

export default function TripTemplate() {
  return (
    <main className="travel-post-page">
      <div className="travel-post-inner">
        {/* Top navigation + label */}
        <header className="travel-post-top">
          <Link to="/" className="travel-post-back">
            ← Back to portfolio
          </Link>
          <p className="travel-post-chip-main">Travel journal · Season / Year</p>
        </header>

        {/* Title */}
        <div
          className="handwritten-title-box collage-piece"
          style={{ '--delay': '100ms' }}
        >
          <h1 className="travel-post-title">TRIP TITLE HERE</h1>
        </div>

        {/* ITINERARY TIMELINE */}
        <section className="itinerary-wrapper">
          <h2 className="itinerary-title">Itinerary</h2>
          <div className="itinerary-timeline">
            <div className="itinerary-item">
              <div className="itinerary-dot" />
              <div className="itinerary-content">
                <p className="itinerary-day">DAY 1 – Lorem ipsum</p>
                <p className="itinerary-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="itinerary-item">
              <div className="itinerary-dot" />
              <div className="itinerary-content">
                <p className="itinerary-day">DAY 2 – Dolor sit amet</p>
                <p className="itinerary-text">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="itinerary-item">
              <div className="itinerary-dot" />
              <div className="itinerary-content">
                <p className="itinerary-day">DAY 3 – Consectetur</p>
                <p className="itinerary-text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div className="itinerary-item">
              <div className="itinerary-dot" />
              <div className="itinerary-content">
                <p className="itinerary-day">DAY 4 – Elit sed do</p>
                <p className="itinerary-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            <div className="itinerary-item">
              <div className="itinerary-dot" />
              <div className="itinerary-content">
                <p className="itinerary-day">DAY 5 – Last morning</p>
                <p className="itinerary-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HERO COLLAGE */}
        <section className="travel-collage">
          <div className="collage-column collage-column-left">
            {/* Polaroid 1 */}
            <figure
              className="collage-piece collage-photo small-shift"
              style={{ '--delay': '300ms' }}
            >
              <div className="polaroid-frame small">
                <img
                  src={travelPlaceholder}
                  alt="Trip detail 1"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Lorem ipsum caption
                </figcaption>
              </div>
            </figure>

            {/* Torn-paper text */}
            <div
              className="collage-piece torn-paper"
              style={{ '--delay': '500ms' }}
            >
              <p className="travel-post-summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Aliquam erat volutpat, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Icons / pills */}
            <div
              className="collage-piece collage-icons"
              style={{ '--delay': '700ms' }}
            >
              <p className="collage-icons-label">TRIP SNAPSHOTS</p>
              <ul className="trip-icon-list">
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">📍</span>
                  <span className="trip-icon-text">Location · Lorem</span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">📸</span>
                  <span className="trip-icon-text">Lots of photos</span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🧳</span>
                  <span className="trip-icon-text">5 days away</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="collage-column collage-column-right">
            {/* Main polaroid */}
            <figure
              className="collage-piece collage-photo"
              style={{ '--delay': '400ms' }}
            >
              <div className="polaroid-frame">
                <img
                  src={travelPlaceholder}
                  alt="Trip main view"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Main highlight moment
                </figcaption>
              </div>
            </figure>

            {/* Second polaroid */}
            <figure
              className="collage-piece collage-photo"
              style={{ '--delay': '600ms' }}
            >
              <div className="polaroid-frame small">
                <img
                  src={travelPlaceholder}
                  alt="Trip detail 2"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Small favourite corner
                </figcaption>
              </div>
            </figure>

            {/* Overlapping mini photos */}
            <div
              className="collage-piece collage-extra-photos"
              style={{ '--delay': '750ms' }}
            >
              <img
                src={travelPlaceholder}
                alt="Mini 1"
                className="extra-photo extra-photo-1"
              />
              <img
                src={travelPlaceholder}
                alt="Mini 2"
                className="extra-photo extra-photo-2"
              />
            </div>
          </div>

          <div className="collage-doodle-line" />
        </section>

        {/* LOWER SECTIONS */}
        <section className="travel-sections">
          {/* Arrival & Transport */}
          <article className="travel-section" style={{ '--delay': '800ms' }}>
            <h2 className="travel-section-title">Arrival &amp; Transport</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              non turpis in ipsum elementum aliquet sed nec lacus.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Transport"
                className="section-inline-image"
              />
            </div>
          </article>

          {/* The little moments */}
          <article className="travel-section" style={{ '--delay': '950ms' }}>
            <h2 className="travel-section-title">The little moments</h2>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Curabitur at fermentum lorem, vitae facilisis arcu.
            </p>
          </article>

          {/* Favourite corners */}
          <article className="travel-section" style={{ '--delay': '1100ms' }}>
            <h2 className="travel-section-title">Favourite corners</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>

          {/* Food */}
          <article className="travel-section" style={{ '--delay': '1250ms' }}>
            <h2 className="travel-section-title">Food</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Food"
                className="section-inline-image"
              />
            </div>
          </article>

          {/* Highlights */}
          <article className="travel-section" style={{ '--delay': '1400ms' }}>
            <h2 className="travel-section-title">Highlights</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </article>

          {/* Next time I visit */}
          <article className="travel-section" style={{ '--delay': '1550ms' }}>
            <h2 className="travel-section-title">Next time I visit</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Consectetur adipiscing elit sed do.</li>
              <li>Magna aliqua ut enim ad minim.</li>
            </ul>
            <p style={{ marginTop: '0.8rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </article>
        </section>

        <footer className="travel-post-footer">
          <p>
            This is a reusable travel layout. Duplicate this component for each
            new trip and swap photos, text and emojis.
          </p>
        </footer>
      </div>
    </main>
  )
}
