// src/travel/ParisTrip.jsx
import { Link } from 'react-router-dom'
import '../styles/TravelPost.css'
import travelPlaceholder from '../assets/profile.jpg'

export default function ParisTrip() {
  return (
    <main className="travel-post-page">
      <div className="travel-post-inner">
        {/* 🎨 Doodles & Stickers for Clutter 🎨 */}
        <div className="doodle-sticker doodle-1" style={{ '--delay': '200ms' }}>
          ★
        </div>
        <div className="doodle-sticker doodle-2" style={{ '--delay': '400ms' }}>
          🖤
        </div>
        

        {/* Top navigation + label */}
        <header className="travel-post-top">
          <Link to="/" className="travel-post-back">
            ← Back to portfolio
          </Link>
          <p className="travel-post-chip-main">Travel journal · Spring 2026</p>
        </header>

        {/* FUN HANDWRITTEN TITLE */}
        <div
          className="handwritten-title-box collage-piece"
          style={{ '--delay': '100ms' }}
        >
          <h1 className="travel-post-title">PARISIAN DREAMING!</h1>
        </div>

        {/* ✏️ ITINERARY TIMELINE */}
        <section className="travel-itinerary">
          <div className="travel-itinerary-header">
            <h2 className="travel-itinerary-title">Itinerary at a glance</h2>
            <p className="travel-itinerary-note">
              Swap these notes later for your real days, places and tiny highlights.
            </p>
          </div>

          <div className="travel-itinerary-timeline">
            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">Day 1 · Arrival ✈️</p>
              <p className="travel-itinerary-text">
                Train into the city, first metro ride, drop bags, wander along the
                Seine and find a café for dinner.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">Day 2 · Landmarks 🗼</p>
              <p className="travel-itinerary-text">
                Morning near the Eiffel Tower, afternoon in the Tuileries / Louvre
                area, sunset walk by the river.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">Day 3 · Neighbourhoods 🏙️</p>
              <p className="travel-itinerary-text">
                Marais wandering, vintage shops, book stalls by the Bouquinistes
                and a slow dinner somewhere tiny.
              </p>
            </div>

            <div className="travel-itinerary-item">
              <p className="travel-itinerary-day-label">Day 4 · Slow morning ☕</p>
              <p className="travel-itinerary-text">
                Long breakfast, sketching and writing, revisiting your favourite
                corner from the trip before heading home.
              </p>
            </div>
          </div>
        </section>

        {/* 🗺️ HERO: THE COLLAGE LAYOUT 🗺️ */}
        <section className="travel-collage">
          <div className="collage-column collage-column-left">
            {/* 1. Small rotated photo */}
            <figure
              className="collage-piece collage-photo small-shift"
              style={{ '--delay': '300ms' }}
            >
              <div className="polaroid-frame small">
                <img
                  src={travelPlaceholder}
                  alt="Paris street detail"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Lunch by the Seine 🍷
                </figcaption>
              </div>
            </figure>

            {/* 2. Main Summary Note (Torn Paper Style) */}
            <div
              className="collage-piece torn-paper"
              style={{ '--delay': '500ms' }}
            >
              <p className="travel-post-summary">
                This trip felt like flipping through a charming, slightly chaotic
                old photo album. Every corner was a photo op, and every day was a
                chance to get lost on purpose. Key takeaways: always carry a
                notebook, and the Parisian light really is magic.
              </p>
            </div>

            {/* 3. Icons / Pills */}
            <div
              className="collage-piece collage-icons"
              style={{ '--delay': '700ms' }}
            >
              <p className="collage-icons-label">TRIP SNAPSHOTS</p>
              <ul className="trip-icon-list">
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🇫🇷</span>
                  <span className="trip-icon-text">Location · Paris</span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">📸</span>
                  <span className="trip-icon-text">100+ photos</span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🥐</span>
                  <span className="trip-icon-text">Croissant research</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="collage-column collage-column-right">
            {/* 4. Large photo */}
            <figure
              className="collage-piece collage-photo"
              style={{ '--delay': '400ms' }}
            >
              <div className="polaroid-frame">
                <img
                  src={travelPlaceholder}
                  alt="Eiffel Tower from the park"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Eiffel Tower at sunset
                </figcaption>
              </div>
            </figure>

            {/* 5. Second photo */}
            <figure
              className="collage-piece collage-photo"
              style={{ '--delay': '600ms' }}
            >
              <div className="polaroid-frame small">
                <img
                  src={travelPlaceholder}
                  alt="A bridge over the Seine"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Crossing Pont Neuf
                </figcaption>
              </div>
            </figure>
          </div>

          {/* 🖼️ Extra overlapping photos (back again) */}
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
              alt="Metro ticket and notes"
              className="extra-photo-image"
            />
          </div>

          {/* Doodle line divider at the bottom of the collage */}
          <div className="collage-doodle-line" />
        </section>

        {/* 📝 MAIN SECTIONS: FLEXIBLE CLUSTERED NOTES 📝 */}
        <section className="travel-sections">
          {/* 1. Arrival and Transport */}
          <article className="travel-section" style={{ '--delay': '800ms' }}>
            <h2 className="travel-section-title">
              Arrival and Transport 🚇
            </h2>
            <p>
              We arrived in Paris by train and quickly learned that the metro
              is the true backbone of the city. After a few confused looks at
              the map, the lines started to make sense and suddenly everywhere
              felt reachable.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Train tickets and metro map"
                style={{ maxWidth: '180px', transform: 'rotate(-2deg)' }}
              />
            </div>
            <p>
              I kept a little note of my most-used routes and stations – it made
              the city feel smaller and more familiar each day.
            </p>
          </article>

          {/* 2. The little moments */}
          <article className="travel-section" style={{ '--delay': '950ms' }}>
            <h2 className="travel-section-title">
              The little moments ✨
            </h2>
            <p>
              The tiny things stood out the most – catching someone drawing in a
              notebook on the metro, watching the light move across apartment
              windows, or hearing an accordion on a quiet side street.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Notebook and pen on a café table"
                style={{ maxWidth: '170px', transform: 'rotate(1.5deg)' }}
              />
            </div>
            <p>
              These are the memories that don&apos;t fit in postcards but stay
              in my head the longest.
            </p>
          </article>

          {/* 3. Favourite corners */}
          <article className="travel-section" style={{ '--delay': '1100ms' }}>
            <h2 className="travel-section-title">
              Favourite corners 💡
            </h2>
            <p>
              Le Marais turned into one of my favourite areas – a maze of narrow
              streets, hidden courtyards and small galleries that invited slow
              wandering instead of rushing.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Narrow Paris street in Le Marais"
                style={{ maxWidth: '190px', transform: 'rotate(-1deg)' }}
              />
            </div>
            <p>
              I also loved the paths along the Seine and the quieter parks where
              locals read, sketched and just existed. Those corners felt like
              real breathing spaces in the city.
            </p>
          </article>

          {/* 4. Food */}
          <article className="travel-section" style={{ '--delay': '1250ms' }}>
            <h2 className="travel-section-title">
              Food 🥐
            </h2>
            <p>
              Breakfast usually meant a pastry and coffee – simple but somehow
              perfect every time. I kept trying to decide which bakery made the
              best croissant and failed in the best way.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Coffee and pastry on a small table"
                style={{ maxWidth: '180px', transform: 'rotate(2deg)' }}
              />
            </div>
            <p>
              From tiny café lunches to late-night snacks, the food became part
              of the rhythm of the day rather than a big event.
            </p>
          </article>

          {/* 5. Highlights */}
          <article className="travel-section" style={{ '--delay': '1400ms' }}>
            <h2 className="travel-section-title">
              Highlights ⭐
            </h2>
            <p>
              Watching the Eiffel Tower appear between buildings, standing on a
              bridge at sunset, and getting lost in streets we hadn&apos;t
              planned to walk down were some of my favourite moments.
            </p>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="Paris skyline at golden hour"
                style={{ maxWidth: '190px', transform: 'rotate(-1.8deg)' }}
              />
            </div>
            <p>
              I loved the mix of big, famous sights and quiet, unplanned stops
              that felt like they were just for us.
            </p>
          </article>

          {/* 6. Next Time I visit */}
          <article className="travel-section" style={{ '--delay': '1550ms' }}>
            <h2 className="travel-section-title">
              Next Time I visit 🇫🇷
            </h2>
            <ul>
              <li>Spend a full day exploring Versailles properly.</li>
              <li>Pack a picnic for Jardin du Luxembourg or another big park.</li>
              <li>Take a Seine river cruise at golden hour.</li>
              <li>Find a small local dance class or open studio session.</li>
            </ul>
            <div className="section-image-wrapper">
              <img
                src={travelPlaceholder}
                alt="View over the city from a hill"
                style={{ maxWidth: '170px', transform: 'rotate(1deg)' }}
              />
            </div>
            <p style={{ marginTop: '0.8rem' }}>
              Paris feels like a place you return to in different versions of
              yourself – so this list is a promise to come back.
            </p>
          </article>
        </section>


        <footer className="travel-post-footer">
          <p>
            This layout keeps things light and scrapbooky, with a vertical
            itinerary timeline, layered polaroids, extra photos and animated
            doodles you can tweak per trip.
          </p>
        </footer>
      </div>
    </main>
  )
}
