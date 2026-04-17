import { useState, useEffect } from 'react'
import './TimeZoneDisplay.css'

const cities = [
  { name: 'Tokyo', abbr: 'TYO', timezone: 'Asia/Tokyo' },
  { name: 'Dhaka', abbr: 'DHK', timezone: 'Asia/Dhaka' },
  { name: 'Charlotte', abbr: 'CLT', timezone: 'America/New_York' },
]

function formatTimeParts(timezone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: timezone,
  }).format(new Date())
  return parts.split(':')
}

function formatDate(timezone) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    timeZone: timezone,
  }).format(new Date())
}

function getHour(timezone) {
  return parseInt(
    new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      hour12: false,
      timeZone: timezone,
    }).format(new Date()),
    10
  )
}

function isSleeping(timezone) {
  const hour = getHour(timezone)
  return hour >= 23 || hour < 6
}

function formatTimeShort(timezone) {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: timezone,
  }).format(new Date())
}

function TimeZoneDisplay({ compact = false }) {
  const [times, setTimes] = useState(() =>
    cities.map((c) => ({
      ...c,
      parts: formatTimeParts(c.timezone),
      date: formatDate(c.timezone),
      sleeping: isSleeping(c.timezone),
    }))
  )
  const [hoveredCity, setHoveredCity] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimes(
        cities.map((c) => ({
          ...c,
          parts: formatTimeParts(c.timezone),
          date: formatDate(c.timezone),
          sleeping: isSleeping(c.timezone),
        }))
      )
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (compact) {
    return (
      <div className="timezone-compact" role="complementary" aria-label="Current times">
        {times.map((city, i) => (
          <span key={city.name} className={`timezone-compact__item ${city.sleeping ? 'timezone-compact__item--sleeping' : ''}`}>
            {i > 0 && <span className="timezone-compact__dot"> · </span>}
            {city.abbr} {formatTimeShort(city.timezone)}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="timezone" role="complementary" aria-label="Current times">
      {times.map((city) => (
        <div
          key={city.name}
          className={`timezone__city ${city.sleeping ? 'timezone__city--sleeping' : ''}`}
          onMouseEnter={() => setHoveredCity(city.name)}
          onMouseLeave={() => setHoveredCity(null)}
        >
          <span className="timezone__name">{city.name}</span>
          <span className="timezone__time">
            {city.parts.map((segment, i) => (
              <span key={i}>
                {segment}
                {i < city.parts.length - 1 && (
                  <span className="timezone__colon">:</span>
                )}
              </span>
            ))}
          </span>
          {city.sleeping ? (
            <span className="timezone__sleeping">sleeping</span>
          ) : (
            <span
              className={`timezone__date ${hoveredCity === city.name ? 'timezone__date--visible' : ''}`}
            >
              {city.date}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default TimeZoneDisplay
