// src/components/TravelBlogSection.jsx
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/TravelBlog.css'
import travelPlaceholder from '../assets/profile.jpg'

const TRIPS = [
  {
    id: 'kenya',
    slug: 'kenya', // links to /travel/kenya
    title: 'Kenya sunsets',
    location: 'Kenya',
    date: 'Summer 2023',
    snippet:
      'Safari mornings, soft coast evenings and dusty roads that feel like a film.',
    image: travelPlaceholder, // swap for a real Kenya thumbnail later
  },
  {
    id: 'paris',
    slug: 'paris',
    title: 'Paris',
    location: 'Paris, France',
    date: 'Spring 2026',
    snippet:
      'A few days of metro rides, café windows and getting lost between the river and side streets.',
    image: travelPlaceholder,
  },
  
  {
    id: 'mallorca',
    slug: 'mallorca',
    title: 'COMING SOON: Mallorca',
    location: 'Mallorca, Spain',
    date: 'Coming soon',
    snippet:
      'Trip in planning – beaches, buses across the island and trying to catch winter sun.',
    image: travelPlaceholder,
  },
  {
    id: 'christmas-trip',
    slug: 'christmas-trip',
    title: 'UPCOMING: Christmas trip',
    location: 'Central Europe',
    date: 'Winter 2025',
    snippet:
      'Markets, trains, thermos tea and wandering through cities lit up with fairy lights.',
    image: travelPlaceholder,
  },
  {
    id: 'asia',
    slug: 'asia',
    title: 'UPCOMING: Asia',
    location: 'Asia',
    date: 'Future adventure',
    snippet:
      'A bigger journey I want to take slowly – long buses, new food, and a different rhythm of days.',
    image: travelPlaceholder,
  },
]

export default function TravelBlogSection() {
  const trackRef = useRef(null)

  const scrollByCards = direction => {
    const track = trackRef.current
    if (!track) return

    const card = track.querySelector('.travel-card')
    const cardWidth = card ? card.getBoundingClientRect().width : 280
    const gap = 16 // matches CSS gap-ish
    const offset = direction === 'next' ? cardWidth + gap : -cardWidth - gap

    track.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section className="travel-blog-section" id="blog">
      <header className="travel-blog-header">
        <p className="travel-blog-label">Travel blog</p>
        <h2 className="travel-blog-heading">
          Little journeys I don&apos;t want to forget.
        </h2>
        <p className="travel-blog-intro">
          Swipe through these cards to open scrap-book style pages, where I can
          pin photos, notes and the small details that made each place feel
          different.
        </p>
      </header>

      <div className="travel-carousel-shell">
        <button
          type="button"
          className="travel-carousel-arrow travel-carousel-arrow-left"
          onClick={() => scrollByCards('prev')}
          aria-label="Scroll to previous trip"
        >
          ‹
        </button>

        <div className="travel-blog-track" ref={trackRef}>
          {TRIPS.map(trip => (
            <article key={trip.id} className="travel-card">
              <Link to={`/travel/${trip.slug}`} className="travel-card-link">
                <div className="travel-card-image-wrap">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="travel-card-image"
                  />
                  <div className="travel-card-tape travel-card-tape-top-left" />
                  <div className="travel-card-tape travel-card-tape-top-right" />
                </div>

                <div className="travel-card-body">
                  <div className="travel-card-meta">
                    <span className="travel-card-location">
                      {trip.location}
                    </span>
                    <span className="travel-card-date">{trip.date}</span>
                  </div>
                  <h3 className="travel-card-title">{trip.title}</h3>
                  <p className="travel-card-snippet">{trip.snippet}</p>
                  <span className="travel-card-cta">Open trip page →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="travel-carousel-arrow travel-carousel-arrow-right"
          onClick={() => scrollByCards('next')}
          aria-label="Scroll to next trip"
        >
          ›
        </button>
      </div>

      <p className="travel-carousel-hint">
        Swipe sideways on mobile, or use the arrows to browse trips.
      </p>
    </section>
  )
}
