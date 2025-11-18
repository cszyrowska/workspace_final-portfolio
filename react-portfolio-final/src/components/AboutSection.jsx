// src/components/AboutSection.jsx
import '../styles/About.css'
import globeBackImage from '../assets/IMG_20251118_150728_778.jpg'

const LOCATIONS = [
  { id: 'uk', label: 'United Kingdom' },
  { id: 'poland', label: 'Poland' },
  { id: 'france', label: 'France' },
  { id: 'spain', label: 'Spain' }, // Now representing Spain and Canaries combined
]

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <header className="about-header">
        <h2 className="about-heading">About me.</h2>
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
            I grew up between places and languages, and travel has always been
            tied to how I see myself. Poland, the UK, Spain, and France each
            hold their own memories: family, rehearsals, late-night buses, and
            small moments that quietly changed how I move through the world.
          </p>
          <p>
            That mix shows up in my work. I like interfaces that feel like
            maps, stories that unfold over time, and designs that invite people
            to explore rather than rush. Whether it&apos;s a page, a piece of
            choreography, or a new city, I&apos;m always looking for rhythm,
            atmosphere, and a sense of journey.
          </p>
        </div>
      </div>
    </section>
  )
}
