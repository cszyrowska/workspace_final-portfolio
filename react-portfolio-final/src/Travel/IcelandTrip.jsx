// src/Travel/IcelandTrip.jsx
import { Link } from 'react-router-dom'
import '../styles/TravelPost.css'
import travelPlaceholder from '../assets/profile.jpg' // swap for real Iceland photos later

export default function IcelandTrip() {
  return (
    <main className="travel-post-page iceland-trip-page">
      <div className="travel-post-inner">
        {/* Top navigation + label */}
        <header className="travel-post-top">
          <Link to="/" className="travel-post-back">
            🡐 Back to portfolio
          </Link>
          <p className="travel-post-chip-main">Travel journal · Winter 2024</p>
        </header>

        {/* Title */}
        <div
          className="handwritten-title-box collage-piece"
          style={{ '--delay': '100ms' }}
        >
          <h1 className="travel-post-title">ICELAND LIGHTS</h1>
        </div>

        {/* ITINERARY TIMELINE */}
        <section className="travel-itinerary">
          <div className="travel-itinerary-header">
            <h2 className="travel-itinerary-title">Itinerary</h2>
            <p className="travel-itinerary-note">
              Swap these notes later for your real timings, routes and favourite
              moments.
            </p>
          </div>

          <div className="travel-itinerary-timeline">
            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">
                Day 1 · Reykjavík arrival
              </p>
              <p className="travel-itinerary-text">
                Landing in the dark, neon buses, first glimpse of snow and a
                quick walk around the city with clouds of breath in the air.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">
                Day 2 · Golden Circle
              </p>
              <p className="travel-itinerary-text">
                Þingvellir, geysers and a waterfall that felt like it was
                roaring in slow motion. Lots of wool hats and steaming hands.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">
                Day 3 · South coast & waterfalls
              </p>
              <p className="travel-itinerary-text">
                Black sand beaches, wind that almost knocks you over and running
                between Skógafoss and Seljalandsfoss with wet hair.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">
                Day 4 · Pools & blue steam
              </p>
              <p className="travel-itinerary-text">
                Hot pools while the air stays freezing, blue water, white
                mountains and that heavy, sleepy feeling after swimming.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">
                Day 5 · Last night & northern lights
              </p>
              <p className="travel-itinerary-text">
                Watching the sky and hoping for green lines to appear, then
                walking home on crunchy ice for the last time.
              </p>
            </div>
          </div>
        </section>

        {/* HERO COLLAGE */}
        <section className="travel-collage">
          <div className="collage-column collage-column-left">
            {/* Small polaroid */}
            <figure
              className="collage-piece collage-photo small-shift"
              style={{ '--delay': '300ms' }}
            >
              <div className="polaroid-frame small">
                <img
                  src={travelPlaceholder}
                  alt="Reykjavík rooftops"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  First glimpse of Reykjavík
                </figcaption>
              </div>
            </figure>

            {/* Torn-paper summary */}
            <div
              className="collage-piece torn-paper"
              style={{ '--delay': '500ms' }}
            >
              <p className="travel-post-summary">
                This trip felt cold and bright at the same time: soft snow,
                loud waterfalls, quiet streets and skies you have to keep
                looking up at. A place where hot water, wool jumpers and big
                silence became part of the routine.
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
                  <span className="trip-icon-emoji">🇮🇸</span>
                  <span className="trip-icon-text">
                    Iceland · Reykjavík & south coast
                  </span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">❄️</span>
                  <span className="trip-icon-text">Winter layers</span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🌌</span>
                  <span className="trip-icon-text">Northern lights chase</span>
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
                  alt="Icelandic waterfall"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Waterfall spray and frozen toes
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
                  alt="Hot pool in winter"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Hot pool, cold air
                </figcaption>
              </div>
            </figure>
          </div>

          {/* Overlapping mini photos */}
          <div
            className="extra-photo extra-photo-1 collage-piece"
            style={{ '--delay': '650ms' }}
          >
            <img
              src={travelPlaceholder}
              alt="Iceland detail"
              className="extra-photo-image"
            />
          </div>

          <div
            className="extra-photo extra-photo-2 collage-piece"
            style={{ '--delay': '750ms' }}
          >
            <img
              src={travelPlaceholder}
              alt="Snow and lights"
              className="extra-photo-image"
            />
          </div>

          <div className="collage-doodle-line" />
        </section>

        {/* LOWER SECTIONS */}
        <section className="travel-sections">
          {/* Arrival & Transport */}
          <article className="travel-section" style={{ '--delay': '800ms' }}>
            <h2 className="travel-section-title">Arrival &amp; transport</h2>
            <p>
              Airport buses into Reykjavík, trying to read signs in the dark
              and working out how the local buses work with gloves on.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Bus and snowy street"
                className="section-inline-image"
              />
            </div>
            <p>
              It quickly turned into a rhythm of: layers, bus, explore, hot
              drink, repeat.
            </p>
          </article>

          {/* The little moments */}
          <article className="travel-section" style={{ '--delay': '950ms' }}>
            <h2 className="travel-section-title">The little moments</h2>
            <p>
              Fogged-up café windows, the sound of snow under boots, tiny
              colourful houses against a grey sky and watching steam rise from
              drains on cold mornings.
            </p>
            <p>
              These small pieces of the day felt just as important as the big
              landmarks.
            </p>
          </article>

          {/* Favourite corners */}
          <article className="travel-section" style={{ '--delay': '1100ms' }}>
            <h2 className="travel-section-title">Favourite corners</h2>
            <p>
              A viewpoint over the city where the sea, mountains and roofs all
              lined up in different shades of blue and white, and a quiet side
              street with fairy lights and hardly any people.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="View over Reykjavík"
                className="section-inline-image"
              />
            </div>
            <p>
              The south coast also felt like a long, changing corridor of
              cliffs, beaches and villages.
            </p>
          </article>

          {/* Food */}
          <article className="travel-section" style={{ '--delay': '1250ms' }}>
            <h2 className="travel-section-title">Food</h2>
            <p>
              Soups, bread, hot chocolate and anything that felt warm and
              heavy. Simple food tasted extra good after being outside for
              hours.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Soup and bread on a table"
                className="section-inline-image"
              />
            </div>
            <p>
              Supermarket snacks also became part of the memory: skyr, pastries
              and random things we picked up because the packaging looked cute.
            </p>
          </article>

          {/* Highlights */}
          <article className="travel-section" style={{ '--delay': '1400ms' }}>
            <h2 className="travel-section-title">Highlights</h2>
            <p>
              Waterfalls in winter light, standing on a black beach with waves
              that felt too big and seeing even a tiny hint of green in the
              sky.
            </p>
            <p>
              The mix of cold air and hot water made every day feel a bit like
              a ritual.
            </p>
          </article>

          {/* Next time I visit */}
          <article className="travel-section" style={{ '--delay': '1550ms' }}>
            <h2 className="travel-section-title">Next time I visit</h2>
            <ul>
              <li>Drive further east along the coast.</li>
              <li>Spend more time in smaller towns away from Reykjavík.</li>
              <li>Try a proper multi-day hike in summer.</li>
            </ul>
            <p style={{ marginTop: '0.8rem' }}>
              Iceland feels like somewhere you have to see in different
              seasons, so this is just the first chapter.
            </p>
          </article>
        </section>

        <footer className="travel-post-footer">
          <p>
            When you have real Iceland photos and notes, just drop them into
            this layout and let the page become your own scrapbook.
          </p>
        </footer>
      </div>
    </main>
  )
}
