export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #1b0d10, #0f0809)',
      display: 'grid',
      placeItems: 'center',
      padding: '4rem',
    }}>
      <div style={{ maxWidth: 900, textAlign: 'center', lineHeight: 1.6 }}>
        <h1 style={{ marginTop: 0, fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          Portfolio Home
        </h1>
        <p>Intro finished. This is where your real sections will go.</p>
      </div>
    </main>
  )
}
