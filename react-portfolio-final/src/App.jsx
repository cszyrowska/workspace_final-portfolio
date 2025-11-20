// src/App.jsx
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Intro from './components/Intro.jsx'
import Home from './components/Home.jsx'

// Travel pages in src/Travel
import ParisTrip from './Travel/ParisTrip.jsx'
import MallorcaTrip from './Travel/MallorcaTrip.jsx'
import ChristmasTrip from './Travel/ChristmasTrip.jsx'
import AsiaTrip from './Travel/AsiaTrip.jsx'
import KenyaTrip from './Travel/KenyaTrip.jsx'
import IcelandTrip from './Travel/IcelandTrip.jsx'
import ScotlandTrip from './Travel/ScotlandTrip.jsx'




export default function App() {
  const [showIntro, setShowIntro] = useState(true)

  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Travel blog pages */}
      <Route path="/travel/kenya" element={<KenyaTrip />} />
      <Route path="/travel/paris" element={<ParisTrip />} />
      <Route path="/travel/mallorca" element={<MallorcaTrip />} />
      <Route path="/travel/christmas-trip" element={<ChristmasTrip />} />
      <Route path="/travel/asia" element={<AsiaTrip />} />
    <Route path="/travel/iceland" element={<IcelandTrip />} />
 <Route path="/travel/scotland" element={<ScotlandTrip />} />
 
    </Routes>
  )
}
