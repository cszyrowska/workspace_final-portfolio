import { useState } from 'react'
import Intro from './components/Intro.jsx'
import Home from './components/Home.jsx'

export default function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      {!showIntro && <Home />}
    </>
  )
}
