import { Link } from 'react-router-dom'
import '../styles/TravelPost.css'

export default function ParisTrip() {
  return (
    <main className="travel-post-page paris-trip-page coming-soon-page">
      <div className="travel-post-inner">
        <div className="travel-topbar">
          <Link to="/" className="travel-back">
            ← Back to portfolio
          </Link>
        </div>

        <div className="coming-soon-content">
          <div className="coming-soon-glow" />
          <span className="coming-soon-badge">Paris</span>
          <h1 className="coming-soon-title">Paris</h1>
          <p className="coming-soon-subtitle">
            A few days of metro rides, café windows and getting lost between the river and side streets.
          </p>
          <div className="coming-soon-container">
            <span className="coming-soon-text-anim">Coming Soon</span>
          </div>
        </div>
      </div>
    </main>
  )
}
