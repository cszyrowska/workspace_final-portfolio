// src/Travel/ScotlandTrip.jsx
import { Link } from 'react-router-dom'
import '../styles/TravelPost.css'

import travelPlaceholder from '../assets/profile.jpg' // not used now but fine
import castleruins from '../assets/Scotland/Castleruins.jpg'
import cows from '../assets/Scotland/cows.jpg'
import moors from '../assets/Scotland/moors.jpg'
import snowmountain from '../assets/Scotland/snowmountain.jpg'
import sunset from '../assets/Scotland/Scotsunset.jpg'
import train from '../assets/Scotland/train.jpg'
import carwindow from '../assets/Scotland/carwindow.jpg'
import water from '../assets/Scotland/miniwaterfall.jpg'
import sky from '../assets/Scotland/sky.jpg'
import van from '../assets/Scotland/van.jpg'

export default function ScotlandTrip() {
  return (
    <main className="travel-post-page scotland-trip-page">
      <div className="travel-post-inner">
        {/* Top navigation + label */}
        <header className="travel-post-top">
          <Link to="/" className="travel-post-back">
            🡐 Back to portfolio
          </Link>
          <p className="travel-post-chip-main">Travel journal · Autumn 2025</p>
        </header>

        {/* Title */}
        <div
          className="handwritten-title-box collage-piece"
          style={{ '--delay': '100ms' }}
        >
          <h1 className="travel-post-title">SCOTLAND TRAINS &amp; LOCHS</h1>
        </div>

        {/* HERO COLLAGE */}
        <section className="travel-collage">
          <div className="collage-column collage-column-left">
            {/* Small polaroid */}
            <figure
              className="collage-piece collage-photo small-shift"
              style={{ '--delay': '300ms' }}
            >
              <div className="polaroid-frame small">
                <img
                  src={snowmountain}
                  alt="Snow on Scottish mountains"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Snow in the mountains
                </figcaption>
              </div>
            </figure>

            {/* Torn-paper summary */}
            <div
              className="collage-piece torn-paper"
              style={{ '--delay': '500ms' }}
            >
              <p className="travel-post-summary">
                I went to Scotland for a week back in 2023. I fell inlove with
                its freeing scent and nature from its clean air and surrounding
                wildlife. So much so, I came back for a longer roadtrip with my
                family. This is a collage of both trips combined...
              </p>
            </div>

            {/* Pills */}
            <div
              className="collage-piece collage-icons"
              style={{ '--delay': '700ms' }}
            >
              <p className="collage-icons-label">Trip snapshots</p>
              <ul className="trip-icon-list">
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🏴</span>
                  <span className="trip-icon-text">Scotland · Sky Island</span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🚆</span>
                  <span className="trip-icon-text">
                    Roadtrip views and camping
                  </span>
                </li>
                <li className="trip-icon-pill">
                  <span className="trip-icon-emoji">🌧️</span>
                  <span className="trip-icon-text">
                    Soft rain and cosy layers
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="collage-column collage-column-right">
            {/* Main polaroid */}
            <figure
              className="collage-piece collage-photo"
              style={{ '--delay': '400ms' }}
            >
              <div className="polaroid-frame">
                <img
                  src={castleruins}
                  alt="Scottish castle ruins"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  mystical castle ruins
                </figcaption>
              </div>
            </figure>

            {/* Second polaroid */}
            <figure
              className="collage-piece collage-photo"
              style={{ '--delay': '600ms' }}
            >
              <div className="polaroid-frame small">
                <img
                  src={sunset}
                  alt="Loch and trees at sunset"
                  className="polaroid-image"
                />
                <figcaption className="polaroid-caption">
                  Lochside pause
                </figcaption>
              </div>
            </figure>
          </div>

          {/* Overlapping mini photos */}
          <div
            className="extra-photo extra-photo-1 collage-piece"
            style={{ '--delay': '650ms' }}
          >
            <img
              src={cows}
              alt="Highland cows"
              className="extra-photo-image"
            />
          </div>

          <div
            className="extra-photo extra-photo-2 collage-piece"
            style={{ '--delay': '750ms' }}
          >
            <img
              src={moors}
              alt="Scottish moors"
              className="extra-photo-image"
            />
          </div>

          <div className="collage-doodle-line" />
        </section>

        {/* LOWER SECTIONS */}
        <section className="travel-sections">
          {/* Arrival & Transport */}
          <article className="travel-section" style={{ '--delay': '800ms' }}>
            <h2 className="travel-section-title">Arrival </h2>
            <p>
              Both times I went, we went by car. My first trip was to a
              beautiful cottage by a loch... and the second was camping in a
              van with my family. Both transport and stays I would never change.
            </p>
            <div className="section-image-wrapper">
              <img
                src={carwindow}
                alt="Car window view in Scotland"
                className="section-inline-image"
              />
            </div>
            <p>
              It gave me two different perspectives on Scotland - one settled in
              a heated home and the other snuggled in my blankets.
            </p>
          </article>

          {/* The little moments */}
          <article className="travel-section" style={{ '--delay': '950ms' }}>
            <h2 className="travel-section-title">The little moments</h2>
            <p>
              So many memories come paired with these trips. The first trip - I
              spent with my partner. We saw a thick blanket of snow for the
              first time in a long while, hiked the mountains to view the
              sunset, and faced the harsh cold waters in a wild-waters dip. We
              videoed our time spent, hoping to come back one day.
            </p>
            <p>
              My second trip was filled with the laughter and love from my
              family. My family&apos;s van trailed behind my aunt&apos;s camper
              as we battled the harsh winds of Sky Island, made pit-stops to
              feed Highlands cows, and ended nights with card games and dinners
              together. Traveling together was such joy, reminding me how
              grateful I am for my family.
            </p>
          </article>

          {/* Favourite corners */}
          <article className="travel-section" style={{ '--delay': '1100ms' }}>
            <h2 className="travel-section-title">Sky Island</h2>
            <p>
              Sky island was beautiful. Although during the time we where there
              it rained 90% of the time, the feel of being on a island with
              barely any people was refreshing and relaxing.
            </p>
            <div className="section-image-wrapper">
              <img
                src={sky}
                alt="Sky Island landscape"
                className="section-inline-image"
              />
            </div>
          </article>

          {/* Hogwarts Train */}
          <article className="travel-section" style={{ '--delay': '1250ms' }}>
            <h2 className="travel-section-title">Hogwarts Train</h2>
            <p>
              Ever since I were a little girl, my household was always marked by
              the famous movie series &apos;Harry Potter&apos;. And I myself was
              obsessed by the series so seeing the original tracks and train
              brought me back to youth.
            </p>
            <div className="section-image-wrapper">
              <img
                src={train}
                alt="Hogwarts style train in Scotland"
                className="section-inline-image"
              />
            </div>
            <p>
              The steam created clouds and the clatter of wheel and track and
              honk filled the air. And then once again I also heard the Harry
              Potter theme tune playing and little me itching in excitement for
              the next adventure.
            </p>
          </article>

          {/* Castles */}
          <article className="travel-section" style={{ '--delay': '1400ms' }}>
            <h2 className="travel-section-title">Castles</h2>
            <p>
              When I went with my partner for the first time, we spent a good
              amount of our time there visiting the famous Scottish castles.
              Whether they where renewed in a museum, or protected within the
              woods... my jaw dropped at every corner. I was taken to every era
              within Scottish heritage and history and it was fascinating.
            </p>
            <p>
              I still remember standing facing a loch, the grand castle behind
              me and my eyes looking out for the Lochness monster in front of
              me. Of course, I did not see any monster... but I did see
              extraordinary swords and armour, felt old mossy brick that still
              hold up castle walls, and heard scottish history and folk lore.
              Scotland won &apos;best castles&apos; for me!
            </p>
          </article>

          {/* Next time I visit */}
          <article className="travel-section" style={{ '--delay': '1550ms' }}>
            <h2 className="travel-section-title">Next time I visit</h2>
            <ul>
              <li>Try traditional Haggis! - I was too scared last time</li>
              <li>Hike up Ben Nevis</li>
              <li>Perhaps book a seat WITHIN the famous Hogwarts Train</li>
            </ul>
            <p style={{ marginTop: '0.8rem' }}>
              Scotland feels like the kind of place you return to in different
              seasons and in different versions of yourself. I hope I will be able 
              to go back there again.. It is one of those places that you could go for a 
              holiday that does not actually feel like your typical holiday - motion-packed, 
              chaotic and pressuring to have loads of fun. Scotland is a stress-free, 
              effortless get away from the business of real life. It is a refuge into 
              silence, clean-air, and magic... whether that is folk tails or harry potter, 
              Scotland has something for everyone looking for some peace and quiet. 
            </p>
          </article>
        </section>

        {/* PHOTO GALLERY – divider + two big slanted photos */}
        <section className="travel-gallery">
          <div className="travel-gallery-grid">
            <figure className="travel-gallery-item gallery-item-1">
              <img
                src={van}
                alt="Family van parked in Scotland"
                className="travel-gallery-image"
              />
            </figure>

            <figure className="travel-gallery-item gallery-item-2">
              <img
                src={water}
                alt="Mini waterfall in the Highlands"
                className="travel-gallery-image"
              />
            </figure>
          </div>
        </section>

        
      </div>
    </main>
  )
}
