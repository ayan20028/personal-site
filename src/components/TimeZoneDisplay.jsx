import { useState, useEffect } from 'react'
import './TimeZoneDisplay.css'

const cities = [
  { name: 'Tokyo', timezone: 'Asia/Tokyo' },
  { name: 'Dhaka', timezone: 'Asia/Dhaka' },
  { name: 'Charlotte', timezone: 'America/New_York' },
]

function formatTime(timezone) {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: timezone,
  }).format(new Date())
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

function TimeZoneDisplay() {
  const [times, setTimes] = useState(() =>
    cities.map((c) => ({
      ...c,
      time: formatTime(c.timezone),
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
          time: formatTime(c.timezone),
          date: formatDate(c.timezone),
          sleeping: isSleeping(c.timezone),
        }))
      )
    }, 1000)
    return () => clearInterval(interval)
  }, [])

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
          <span className="timezone__time">{city.time}</span>
          <span
            className={`timezone__date ${hoveredCity === city.name ? 'timezone__date--visible' : ''}`}
          >
            {city.sleeping && hoveredCity === city.name ? 'sleeping' : city.date}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TimeZoneDisplay
