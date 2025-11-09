import { useEffect } from 'react'
import '../styles/Intro.css'

function Lantern({ delay = 0, x = '25%' }) {
  const style = {
    left: x,
    '--drop-delay': `${delay}ms`,
  }

  return (
    <div className="lantern" style={style} aria-hidden="true">
      <div className="string" />
      <svg viewBox="0 0 60 90" className="lantern-svg">
        <defs>
          <radialGradient id="glow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f7e3b1" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffb347" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* soft glow */}
        <ellipse
          cx="30"
          cy="45"
          rx="28"
          ry="32"
          fill="url(#glow)"
          opacity="0.6"
        />

        {/* outer frame */}
        <rect
          x="10"
          y="18"
          width="40"
          height="54"
          rx="10"
          fill="#3c2f21"
          stroke="#f0c27b"
          strokeWidth="2"
        />

        {/* paper */}
        <rect
          x="14"
          y="22"
          width="32"
          height="46"
          rx="8"
          fill="#f7e3b1"
        />

        {/* flame */}
        <path
          d="M30 46c0-6 6-10 6-16c0-4-3-7-6-7s-6 3-6 7c0 6 6 10 6 16z"
          fill="#ffb347"
        />
      </svg>
    </div>
  )
}

export default function Intro({ onFinish }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReduced) {
      onFinish?.()
      return
    }

    // Total timeline: lanterns + wind + push
    const totalMs = 3800
    const t = setTimeout(() => onFinish?.(), totalMs)

    return () => clearTimeout(t)
  }, [onFinish])

  return (
    <div className="intro-overlay">
      {/* 4 lanterns dropping with slight stagger */}
      <Lantern x="20%" delay={0} />
      <Lantern x="38%" delay={200} />
      <Lantern x="56%" delay={400} />
      <Lantern x="74%" delay={600} />

      {/* wind sweep element */}
      <div className="wind" />

      {/* subtle title while intro plays */}
      <h1 className="intro-title">Cecylia Szyrowska</h1>
    </div>
  )
}
