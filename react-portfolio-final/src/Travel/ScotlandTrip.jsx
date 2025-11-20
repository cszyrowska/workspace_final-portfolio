// src/Travel/ScotlandTrip.jsx
import { Link } from 'react-router-dom'
import '../styles/TravelPost.css'
import travelPlaceholder from '../assets/profile.jpg' // swap for real Scotland photos later

export default function ScotlandTrip() {
  return (
    <main className="travel-post-page scotland-trip-page">
      <div className="travel-post-inner">
        {/* Top navigation + label */}
        <header className="travel-post-top">
          <Link to="/" className="travel-post-back">
            🡐 Back to portfolio
          </Link>
          <p className="travel-post-chip-main">Travel journal · Autumn 2025</p>
        </header>

        {/* Title */}
        <div
          className="handwritten-title-box collage-piece"
          style={{ '--delay': '100ms' }}
        >
          <h1 className="travel-post-title">SCOTLAND TRAINS & LOCHS</h1>
        </div>

        {/* ITINERARY TIMELINE */}
        <section className="travel-itinerary">
          <div className="travel-itinerary-header">
            <h2 className="travel-itinerary-title">Itinerary</h2>
            <p className="travel-itinerary-note">
              Swap these placeholders for your actual trains, hostels and hill
              walks once the trip is real.
            </p>
          </div>

          <div className="travel-itinerary-timeline">
            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">
                Day 1 · Edinburgh arrival
              </p>
              <p className="travel-itinerary-text">
                Train into Waverley, first sight of the castle, dragging bags up
                a hill and finding a tiny place for dinner.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">
                Day 2 · Old town & viewpoints
              </p>
              <p className="travel-itinerary-text">
                Cobbled streets, closes and staircases, climbing up to a
                viewpoint to see roofs, sea and hills all in one frame.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">
                Day 3 · Highlands / loch day trip
              </p>
              <p className="travel-itinerary-text">
                Bus out of the city, long quiet roads, mirror-flat water and
                mountains that make you feel tiny.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">
                Day 4 · Trains & small towns
              </p>
              <p className="travel-itinerary-text">
                Sitting by the train window watching fields, sheep and sudden
                bits of coastline blur past; stopping in a smaller town for a
                slow walk.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">
                Day 5 · Last wander
              </p>
              <p className="travel-itinerary-text">
                One more loop through favourite streets, a bookshop stop and a
                final look at the city from a hill before heading home.
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
                  alt="Edinburgh street"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  First evening in Edinburgh
                </figcaption>
              </div>
            </figure>

            {/* Torn-paper summary */}
            <div
              className="collage-piece torn-paper"
              style={{ '--delay': '500ms' }}
            >
              <p className="travel-post-summary">
                This trip feels like layers: stone, history, soft rain, trains,
                and then suddenly big empty landscapes. City days, loch days and
                long walks that end in a warm pub or hostel kitchen.
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
                  <span className="trip-icon-emoji">🏴</span>
                  <span className="trip-icon-text">
                    Scotland · Edinburgh & Highlands
                  </span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🚆</span>
                  <span className="trip-icon-text">Train windows & playlists</span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🌧️</span>
                  <span className="trip-icon-text">Soft rain and cosy layers</span>
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
                  alt="Highlands landscape"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Misty hills and quiet water
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
                  alt="Loch and trees"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Lochside pause
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
              alt="Stairs or street detail"
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
              Trains, trams and buses becoming familiar; learning station names,
              figuring out which side of the street the bus actually stops on.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Train into the city"
                className="section-inline-image"
              />
            </div>
            <p>
              There&apos;s something very calming about watching the landscape
              change from a train window while your playlist loops.
            </p>
          </article>

          {/* The little moments */}
          <article className="travel-section" style={{ '--delay': '950ms' }}>
            <h2 className="travel-section-title">The little moments</h2>
            <p>
              A warm café after walking in the rain, sharing chips under a tiny
              shelter, laughing at how wind ruins every photo on a viewpoint.
            </p>
            <p>
              These small scenes sit in my head just as strongly as castles and
              mountains.
            </p>
          </article>

          {/* Favourite corners */}
          <article className="travel-section" style={{ '--delay': '1100ms' }}>
            <h2 className="travel-section-title">Favourite corners</h2>
            <p>
              A side street with old bookshops, a stretch of path along the
              water where everything goes quiet, and a bit of hillside where you
              can see the whole city at once.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="View over the city"
                className="section-inline-image"
              />
            </div>
            <p>
              The Highlands also feel like a favourite corner: big, empty and
              kind of grounding.
            </p>
          </article>

          {/* Food */}
          <article className="travel-section" style={{ '--delay': '1250ms' }}>
            <h2 className="travel-section-title">Food</h2>
            <p>
              Soups, pies, hot drinks and any dessert that comes with custard.
              Simple, filling food tastes extra good after walking up hills in
              the wind.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Comfort food on a table"
                className="section-inline-image"
              />
            </div>
            <p>
              Supermarket dinners in hostels also become a core part of the
              story.
            </p>
          </article>

          {/* Highlights */}
          <article className="travel-section" style={{ '--delay': '1400ms' }}>
            <h2 className="travel-section-title">Highlights</h2>
            <p>
              That first view of the castle, a loch at golden hour, train tracks
              cutting through fog and laughing about getting slightly lost on a
              hill trail.
            </p>
          </article>

          {/* Next time I visit */}
          <article className="travel-section" style={{ '--delay': '1550ms' }}>
            <h2 className="travel-section-title">Next time I visit</h2>
            <ul>
              <li>Spend longer in the Highlands or on the islands.</li>
              <li>Find a local dance class or community event.</li>
              <li>Try a proper multi-day walk with a backpack.</li>
            </ul>
            <p style={{ marginTop: '0.8rem' }}>
              Scotland feels like the kind of place you return to in different
              seasons and different versions of yourself.
            </p>
          </article>
        </section>

        <footer className="travel-post-footer">
          <p>
            When you have real Scotland photos and notes, just replace the
            placeholders and let this page become its own scrapbook chapter.
          </p>
        </footer>
      </div>
    </main>
  )
}
