// src/components/ResearchSection.jsx
import '../styles/Research.css'
import dnaPhoto from '../assets/dna_origami_research.png'
import rehabPhoto from '../assets/rehabilitation_research.png'

const PROJECTS = [
  {
    id: 'criminal-rehabilitation',
    title: 'Criminal Rehabilitation and Reoffending',
    description:
      'My Extended Project Qualification exploring whether rehabilitation programmes can reduce reoffending and support long-term behavioural change.',
    skills: [
      'Criminology',
      'Behavioural Psychology',
      'Literature Review',
      'Data Analysis',
    ],
    image: rehabPhoto,
    imagePosition: 'center 40%',
  },
  {
    id: 'dna-origami',
    title: 'DNA Origami and Emerging Biotechnology',
    description:
      'An exploration of how DNA can be used as a structural material in developing areas of science and medicine.',
    skills: [
      'Biotechnology',
      'Nanotechnology',
      'Scientific Analysis',
      'Literature Review',
    ],
    image: dnaPhoto,
    imagePosition: 'center 40%',
  },
]

export default function ResearchSection() {
  return (
    <section id="research" className="research-section">
      <header className="research-header">
        <p className="research-label">Academic Work</p>

        <h2 className="research-heading">Research</h2>

        <p className="research-intro">
          A selection of my academic research and scientific projects,
          exploring behavioural change and nanotechnology.
        </p>
      </header>

      <div className="research-grid">
        {PROJECTS.map((project) => (
          <article key={project.id} className="research-card">
            {project.image ? (
              <div className="research-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="research-card-image"
                  style={{
                    objectPosition: project.imagePosition,
                  }}
                />
                {project.id === 'criminal-rehabilitation' && (
                  <div className="neural-overlay">
                    <div className="pulse-node node-1"></div>
                    <div className="pulse-node node-2"></div>
                    <div className="pulse-node node-3"></div>
                    <div className="pulse-node node-4"></div>
                    <div className="pulse-node node-5"></div>
                    <div className="scanner-line"></div>
                  </div>
                )}
                {project.id === 'dna-origami' && (
                  <div className="dna-overlay">
                    <div className="pulse-node-teal dna-node-1"></div>
                    <div className="pulse-node-teal dna-node-2"></div>
                    <div className="pulse-node-teal dna-node-3"></div>
                    <div className="pulse-node-teal dna-node-4"></div>
                    <div className="pulse-node-teal dna-node-5"></div>
                    <div className="scanner-line-teal"></div>
                  </div>
                )}
              </div>
            ) : (
              <div
                className="research-image-placeholder"
                aria-hidden="true"
              >
                <div className="research-image-icon-container">
                  <svg
                    className="research-image-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    />

                    <circle cx="8.5" cy="8.5" r="1.5" />

                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>

                <span className="research-image-text">
                  Image coming soon
                </span>
              </div>
            )}

            <div className="research-card-content">
              <h3 className="research-card-title">
                {project.title}
              </h3>

              <p className="research-card-desc">
                {project.description}
              </p>

              <div className="research-skills">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="research-skill-pill"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="#research"
                className="research-view-link"
                onClick={(event) => event.preventDefault()}
                aria-label={`View project details for ${project.title} (coming soon)`}
              >
                View project{' '}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}