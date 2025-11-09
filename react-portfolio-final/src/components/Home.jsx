import { useEffect, useState } from 'react'
import '../styles/Home.css'

function CompassRose() {
  return (
    <div className="compass-wrapper">
      <svg
        className="compass-svg compass-spin"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3-3" />
        <line x1="18.36" y1="5.64" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="18.36" x2="5.64" y2="5.64" />
      </svg>
    </div>
  )
}

function AirplaneIcon({ scrollProgress }) {
  const translateX = scrollProgress * 100

  return (
    <div
      className="airplane-icon"
      style={{
        transform: `translateX(calc(${translateX}% - 1rem))`,
      }}
    >
      <svg
        className="airplane-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22 11 13 2 9z" />
      </svg>
    </div>
  )
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScrollDistance = 40 // a bit more gentle than before
      const currentScroll = window.scrollY

      let progress = 0
      if (currentScroll > 0) {
        progress = Math.min(1, currentScroll / maxScrollDistance)
      }

      setScrollProgress(progress)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="home-main">
      <div className="home-inner">
        {/* Simple, vintage hero */}
        <header className="hero-shell">
          <div className="hero-left">
            <p className="hero-tagline">PORTFOLIO · 2025</p>

            <div className="hero-name-row">
              <CompassRose />
              <div>
                <h1 className="hero-title name-animation">
                  Cecylia Szyrowska
                </h1>
                <p className="hero-subtitle">
                  Designer · Dancer · Explorer
                </p>
              </div>
            </div>

            <p className="hero-copy">
              I weave stories through movement, visuals, and the web —
              blending a love for travel, vintage objects, and thoughtful
              interaction into everything I create.
            </p>

            <div className="hero-meta">
              <span className="meta-pill">Based in Plymouth, UK</span>
              <span className="meta-pill">Working worldwide</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="passport-card">
              <p className="passport-title">Travel log</p>
              <ul className="passport-list">
                <li>
                  <a href="#work" className="passport-link">
                    <span className="passport-main">Work</span>
                    <span className="passport-sub">
                      Selected projects and experiments
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="passport-link">
                    <span className="passport-main">About</span>
                    <span className="passport-sub">
                      Journey, influences, and process
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="passport-link">
                    <span className="passport-main">Contact</span>
                    <span className="passport-sub">
                      Let&apos;s plan your next story
                    </span>
                  </a>
                </li>
              </ul>

              <div className="passport-stamp-row">
                <span className="stamp-dot" />
                <span className="stamp-label">Open for collaborations</span>
              </div>
            </div>
          </div>
        </header>

        {/* Divider with subtle travel line */}
        <div className="hero-divider">
          <div className="travel-line">
            <AirplaneIcon scrollProgress={scrollProgress} />
          </div>
          <p className="hero-note">Scroll to board the journey</p>
        </div>

        {/* Placeholder for future sections */}
        <section className="placeholder-section">
          <h2 id="work">Sections to map out</h2>
          <p>
            Next, we can sketch the portfolio sections — a project gallery,
            an about page, and a simple way to reach out. Imagine the
            &quot;Work&quot; section laid out like a small collection of
            stamped postcards from different chapters of your life.
          </p>
        </section>
      </div>
    </main>
  )
}
