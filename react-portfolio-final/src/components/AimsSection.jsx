// src/components/AimsSection.jsx
import '../styles/Aims.css'

const ASPIRATIONS = [
  {
    id: 'keep-dancing',
    stamp: 'Dance',
    title: 'Keep dancing, always',
    blurb: 'I want dance to stay at the centre of my life, not just in one season.',
    points: [
      'Keep training regularly in styles that feel honest to me, from studio classes to community projects.',
      'Say yes to performing and sharing work, even when it feels a little scary.',
      'Let dance be both my practice and my way of staying grounded, curious and connected to other people.',
    ],
  },
  {
    id: 'study-dance-psych',
    stamp: 'Study',
    title: 'Study dance & psychology',
    blurb: 'I’m drawn to where movement, mind and emotion meet.',
    points: [
      'Pursue a course that combines psychology with dance, movement or wellbeing.',
      'Learn how bodies, stories and environments shape how we think, feel and relate to each other.',
      'Bring what I learn back into the studio, so I can support others with both technique and understanding.',
    ],
  },
  {
    id: 'creative-digital',
    stamp: 'Create',
    title: 'Stay creative & digitally fluent',
    blurb: 'Keep using design and tech as tools for storytelling, not just for screens.',
    points: [
      'Continue building websites, visuals and small digital projects that feel thoughtful and human.',
      'Stay confident with modern tools – from editors and frameworks to AI – without losing my own voice.',
      'Use my digital skills to support small teams, artists and organisations whose work I care about.',
    ],
  },
  {
    id: 'keep-travelling',
    stamp: 'Travel',
    title: 'Carry on travelling',
    blurb: 'Let new places quietly change how I see myself and my work.',
    points: [
      'Keep exploring cities and landscapes across Europe and beyond, not just as a tourist but as a learner.',
      'Seek out local studios, theatres and creative spaces wherever I go.',
      'Treat travel as a way to collect stories, textures and rhythms that feed into my dancing, writing and design.',
    ],
  },
]

export default function AimsSection() {
  return (
    <section className="aims-section" id="achievements">
      <header className="aims-header">
        <p className="aims-label">Aims & aspirations</p>
        <h2 className="aims-heading">Postcards to my future self.</h2>
        <p className="aims-intro">
          These are the directions I keep coming back to – the ways I want to
          keep moving, learning, travelling and creating over the next few
          years.
        </p>
      </header>

      <div className="aims-grid">
        {ASPIRATIONS.map(card => (
          <article key={card.id} className="aims-card">
            <div className="aims-flip">
              {/* FRONT: postcard cover */}
              <div className="aims-face aims-face-front">
                <div className="aims-postcard">
                  <div className="aims-postcard-stamp">{card.stamp}</div>
                  <div className="aims-postcard-body">
                    <h3 className="aims-postcard-title">{card.title}</h3>
                    <p className="aims-postcard-blurb">{card.blurb}</p>
                    <p className="aims-postcard-note">Hover or tap to flip ↺</p>
                  </div>
                  <div className="aims-postcard-markings" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              {/* BACK: detail list */}
              <div className="aims-face aims-face-back">
                <div className="aims-back-inner">
                  <h3 className="aims-back-title">{card.title}</h3>
                  <ul className="aims-back-points">
                    {card.points.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
