import { useState } from 'react'
import '../styles/About.css'

const TRAITS = [
  'Creative',
  'Curious',
  'Hardworking',
  'Playful',
  'Thoughtful',
  'Determined',
]

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev)
  }

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
        {/* Left: Ladybug */}
        <div className="ladybug-region">
          <button
            type="button"
            className={`ladybug-button ${isExpanded ? 'is-expanded' : ''}`}
            onClick={toggleExpanded}
            aria-pressed={isExpanded}
            aria-label="Interactive illustration: hover or tap to reveal traits."
          >
            {/* Ladybug body */}
            <div className="ladybug-body">
              <div className="ladybug-head" />
              <div className="ladybug-shell">
                <div className="ladybug-shell-line" />
                <div className="ladybug-spot spot-1" />
                <div className="ladybug-spot spot-2" />
                <div className="ladybug-spot spot-3" />
                <div className="ladybug-spot spot-4" />
              </div>
            </div>

            {/* Legs + traits */}
            {TRAITS.map((trait, index) => (
              <div key={trait} className={`ladybug-leg leg-${index + 1}`}>
                <div className="leg-content">
                  <svg
                    className="leg-line"
                    viewBox="0 0 100 160"
                    aria-hidden="true"
                  >
                    {/* curved leg path */}
                    <path
                      d="M50 0 C60 40, 40 90, 50 160"
                      stroke="black"
                      strokeWidth="7"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <span className="leg-label">{trait}</span>
                </div>
              </div>
            ))}
          </button>

          <p className="ladybug-helper">
            Hover or tap the ladybug to reveal a few of the traits that guide how
            I work and move.
          </p>
        </div>

        {/* Right: Side text */}
        <div className="about-side-copy">
          <p>
            I&apos;m drawn to projects that feel like journeys: building
            experiences that unfold slowly, reward curiosity, and hold onto
            small, human details. Dance and design are the two languages I use
            most, but they&apos;re both about the same thing — connection, rhythm,
            and how something feels from the inside.
          </p>
          <p>
            Whether I&apos;m planning a route across Europe, shaping a piece of
            choreography, or laying out a portfolio page, I care about making
            things that feel honest, playful, and a little bit unexpected.
          </p>
        </div>
      </div>
    </section>
  )
}
