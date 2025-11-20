// src/components/Intro.jsx
import { useEffect } from 'react'
import '../styles/intro.css'

export default function Intro({ onEnter, onFinish }) {
  // Call whichever callback App gives us
  const triggerEnter = () => {
    if (typeof onEnter === 'function') {
      onEnter()
    } else if (typeof onFinish === 'function') {
      onFinish()
    }
  }

  // Optional: allow "Enter" on key press
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Enter') {
        triggerEnter()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onEnter, onFinish])

  return (
    <div className="intro-root">
      {/* Sky + lanterns + fireflies (wind is in CSS as ::before) */}
      <div className="intro-sky">
        <div className="lantern-column lantern-column-1">
          <div className="lantern-string" />
          <div className="lantern-body-wrapper">
            <div className="lantern-body" />
          </div>
        </div>

        <div className="lantern-column lantern-column-2">
          <div className="lantern-string" />
          <div className="lantern-body-wrapper">
            <div className="lantern-body" />
          </div>
        </div>

        <div className="lantern-column lantern-column-3">
          <div className="lantern-string" />
          <div className="lantern-body-wrapper">
            <div className="lantern-body" />
          </div>
        </div>

        <div className="intro-fireflies">
          <div className="firefly firefly-1" />
          <div className="firefly firefly-2" />
          <div className="firefly firefly-3" />
          <div className="firefly firefly-4" />
        </div>
      </div>

      {/* Copy */}
      <main className="intro-content">
        <div className="intro-inner">
          <p className="intro-chip">Portfolio entryway</p>
          <h1 className="intro-title">
            Soft,
            <span>glowy</span>
            little corner of the internet.
          </h1>
          <p className="intro-text">
            Lanterns, travel, code, dance. This is the cosy front door into the
            projects I&apos;ve been building and the places that shaped them.
          </p>

          <button className="intro-button" onClick={triggerEnter}>
            Enter portfolio
          </button>

          <p className="intro-hint">
            The lantern strings stay pinned to the top.
            <br />
            Fireflies and wind are here just for fun ✨
          </p>
        </div>
      </main>
    </div>
  )
}
