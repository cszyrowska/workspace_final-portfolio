// src/components/AboutSection.jsx
import '../styles/About.css'
import globeBackImage from '../assets/IMG_20251118_150728_778.jpg'

const LOCATIONS = [
  { id: 'uk', label: 'United Kingdom' },
  { id: 'scotland', label: 'Scotland' },      // 🆕
  { id: 'iceland', label: 'Iceland' },        // 🆕
  { id: 'poland', label: 'Poland' },
  { id: 'france', label: 'France' },
  { id: 'spain', label: 'Spain / Canaries' }, // Now representing Spain and Canaries combined
  { id: 'kenya', label: 'Kenya' },            // 🆕
]
export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <header className="about-header">
        <h2 className="about-heading">About me</h2>
        <p className="about-intro">
          I&apos;m a designer and dancer who loves turning small details into
          stories &mdash; whether that&apos;s a movement phrase, a web layout,
          or a long bus ride to a new city.
        </p>
      </header>

      <div className="about-layout">
        {/* Left: Globe with flip image */}
        <div className="globe-region">
          <div
            className="globe-wrapper"
            aria-label="Globe showing places connected to me, which can flip to a personal image."
          >
            <div className="globe-flip">
              {/* FRONT – stylised globe */}
              <div className="globe-face globe-face-front">
                {/* Globe core */}
                <div className="globe-core">
                  <div className="globe-meridian globe-meridian-vertical" />
                  <div className="globe-meridian globe-meridian-diagonal-left" />
                  <div className="globe-meridian globe-meridian-diagonal-right" />
                  <div className="globe-latitude globe-latitude-top" />
                  <div className="globe-latitude globe-latitude-middle" />
                  <div className="globe-latitude globe-latitude-bottom" />
                </div>

                {/* Orbit layer with lines + labels */}
                <div className="globe-orbit">
                  {LOCATIONS.map(location => (
                    <div
                      key={location.id}
                      className={`globe-location globe-location-${location.id}`}
                    >
                      <div
                        className="globe-location-line-wrapper"
                        aria-hidden="true"
                      >
                        <span className="globe-location-dot" />
                        <span className="globe-location-line" />
                      </div>
                      <span className="globe-location-label">
                        {location.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BACK – image that appears on hover */}
              <div className="globe-face globe-face-back">
                <img
                  src={globeBackImage}
                  alt="A moment that feels like home to me."
                  className="globe-back-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Side text */}
        <div className="about-side-copy">
          <p>
            My name is Cecylia, a 18-year old creative who loves sitting 
            at the crossroads of art and people. Currently taking a gap year, I 
            love mixing cosy things with big dreams. My love for reading has 
            turned me into a storyteller in my own right, my love for dance 
            lets me pour that creativity into movement, and my love for learning 
            keeps me constantly collecting new ideas to fold back into everything I do.

          </p>
          <p>
            However, traveling has always had a special place in my heart. My travels 
            have shaped who I am today, especially my Kenya trip in 2023, and are
            the strongest force pushing me out of my comfort zone, stretching my 
            worldview, and inspiring the way I live, learn and create. 
          </p>
        </div>
      </div>
    </section>
  )
}
