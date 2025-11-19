// src/Travel/KenyaTrip.jsx
import { Link } from 'react-router-dom'
import '../styles/TravelPost.css'
import travelPlaceholder from '../assets/profile.jpg' // swap to real Kenya photos when you have them

export default function KenyaTrip() {
  return (
    <main className="travel-post-page kenya-trip-page">
      <div className="travel-post-inner">
        {/* Top navigation + label */}
        <header className="travel-post-top">
          <Link to="/" className="travel-post-back">
            🡐 Back to portfolio
          </Link>
          <p className="travel-post-chip-main">Travel journal · Winter 2026</p>
        </header>

        {/* Title */}
        <div
          className="handwritten-title-box collage-piece"
          style={{ '--delay': '100ms' }}
        >
          <h1 className="travel-post-title">KENYA SUNSETS</h1>
        </div>

        {/* ITINERARY TIMELINE */}
        <section className="travel-itinerary">
          <div className="travel-itinerary-header">
            <h2 className="travel-itinerary-title">Itinerary</h2>
            <p className="travel-itinerary-note">
              Swap these notes later for your real timings, routes and highlights.
            </p>
          </div>

          <div className="travel-itinerary-timeline">
            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">Day 1 · Nairobi arrival</p>
              <p className="travel-itinerary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Checked
                into a tiny guesthouse, swapped currency and tried my first Kenyan
                coffee.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">Day 2 · Safari day</p>
              <p className="travel-itinerary-text">
                Early wake-up for a game drive. Saw shapes on the horizon slowly
                turn into giraffes and elephants.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">Day 3 · Village & market</p>
              <p className="travel-itinerary-text">
                Handmade jewellery, bright fabrics and children waving at the
                camera everywhere.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">Day 4 · Coast time</p>
              <p className="travel-itinerary-text">
                White sand beaches and turquoise water that looked totally unreal.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">Day 5 · Last sunrise</p>
              <p className="travel-itinerary-text">
                Woke up at 5am for one more sky full of pastel colours before the
                flight home.
              </p>
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
                  alt="Safari jeep"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  First game drive
                </figcaption>
              </div>
            </figure>

            {/* Torn-paper summary */}
            <div
              className="collage-piece torn-paper"
              style={{ '--delay': '500ms' }}
            >
              <p className="travel-post-summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. This trip
                felt like living inside a nature documentary – dusty roads, orange
                sunsets and quiet moments watching the sky change.
              </p>
            </div>

            {/* Pills */}
            <div
              className="collage-piece collage-icons"
              style={{ '--delay': '700ms' }}
            >
              <p className="collage-icons-label">Trip snapshots</p>
              <ul className="trip-icon-list">
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🌍</span>
                  <span className="trip-icon-text">
                    Kenya · Nairobi & coast
                  </span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🦒</span>
                  <span className="trip-icon-text">Safari mornings</span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🌅</span>
                  <span className="trip-icon-text">Sunset chaser</span>
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
                  alt="Savannah view"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Golden hour over the savannah
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
                  alt="Beach view"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Quiet beach afternoon
                </figcaption>
              </div>
            </figure>
          </div>

          {/* Overlapping mini photos – Kenya uses same system */}
          <div
            className="extra-photo extra-photo-1 collage-piece"
            style={{ '--delay': '650ms' }}
          >
            <img
              src={travelPlaceholder}
              alt="Close-up detail"
              className="extra-photo-image"
            />
          </div>

          <div
            className="extra-photo extra-photo-2 collage-piece"
            style={{ '--delay': '750ms' }}
          >
            <img
              src={travelPlaceholder}
              alt="Another close-up detail"
              className="extra-photo-image"
            />
          </div>

          <div className="collage-doodle-line" />
        </section>

        {/* LOWER SECTIONS */}
        <section className="travel-sections">
          {/* Arrival & Transport */}
          <article className="travel-section" style={{ '--delay': '800ms' }}>
            <h2 className="travel-section-title">Arrival &amp; Transport</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Airport
              chaos, new currency and figuring out matatus and taxis.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Transport in Kenya"
                className="section-inline-image"
              />
            </div>
          </article>

          {/* The little moments */}
          <article className="travel-section" style={{ '--delay': '950ms' }}>
            <h2 className="travel-section-title">The little moments</h2>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Kids waving at the bus, campfire stories and the sound of insects
              at night.
            </p>
          </article>

          {/* Favourite corners */}
          <article className="travel-section" style={{ '--delay': '1100ms' }}>
            <h2 className="travel-section-title">Favourite corners</h2>
            <p>
              Ut enim ad minim veniam, hidden viewpoints, roadside fruit stalls
              and that one sunset spot we almost drove past.
            </p>
          </article>

          {/* Food */}
          <article className="travel-section" style={{ '--delay': '1250ms' }}>
            <h2 className="travel-section-title">Food</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate. Ugali, chapati,
              grilled fish by the beach and endless fresh mango juice.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Food in Kenya"
                className="section-inline-image"
              />
            </div>
          </article>

          {/* Highlights */}
          <article className="travel-section" style={{ '--delay': '1400ms' }}>
            <h2 className="travel-section-title">Highlights</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident – sunrise safaris,
              starry skies with zero light pollution, and the feeling of being
              very small in a huge landscape.
            </p>
          </article>

          {/* Next time I visit */}
          <article className="travel-section" style={{ '--delay': '1550ms' }}>
            <h2 className="travel-section-title">Next time I visit</h2>
            <ul>
              <li>Visit a different national park.</li>
              <li>Spend more time on the coast.</li>
              <li>Try a longer camping safari.</li>
            </ul>
            <p style={{ marginTop: '0.8rem' }}>
              Already mentally planning part two of this trip.
            </p>
          </article>
        </section>

        <footer className="travel-post-footer">
          <p>
            Swap the placeholder photos for real Kenya images whenever you’re
            ready, and tweak the text to match your actual itinerary.
          </p>
        </footer>
      </div>
    </main>
  )
}
