import '../styles/About.css'
import globeBackImage from '../assets/IMG_20251118_150728_778.jpg'
import cvPdf from '../assets/cecylia_szyrowska_cv.pdf'

const LOCATIONS = [
  { id: 'uk', label: 'United Kingdom' },
  { id: 'scotland', label: 'Scotland' },      // 🆕
  { id: 'iceland', label: 'Iceland' },        // 🆕
  { id: 'poland', label: 'Poland' },
  { id: 'france', label: 'France' },
  { id: 'spain', label: 'Spain / Canaries' }, // Now representing Spain and Canaries combined
  { id: 'kenya', label: 'Kenya' },
  { id: 'sea', label: 'South East Asia' },            // 🆕

]
export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <header className="about-header">
        <h2 className="about-heading">About me</h2>
        <p className="about-intro">
          I’m a prospective Psychology student and creative researcher interested in human behaviour, child development and the stories that shape who we become.
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
            My name is Cecylia, an 18-year-old prospective Psychology student currently taking a gap year. My interests sit at the crossroads of psychology, creativity and people. Through academic research, scientific projects and working with children, I have developed a strong interest in how people learn, communicate and grow.
          </p>
          <p>
            Travel has also played an important role in shaping who I am. Experiences such as my trip to Kenya in 2023 have pushed me beyond my comfort zone, broadened my understanding of different people and cultures, and continue to influence the way I live, learn and create.
          </p>
        </div>
      </div>

      <div className="about-cta-container">
        <a href="#research" className="about-cta-btn" aria-label="Explore my research projects">
          Explore my research
        </a>
        <a
          href={cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="about-cta-btn"
          aria-label="View my CV"
        >
          View my CV
        </a>
        <a href="#contact" className="about-cta-btn" aria-label="Contact me">
          Contact me
        </a>
      </div>
    </section>
  )
}
