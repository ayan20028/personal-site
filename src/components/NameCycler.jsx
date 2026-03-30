import { useState, useEffect, useRef } from 'react'
import './NameCycler.css'

const names = [
  'Ayan Morshed',
  'アヤン・モルシェド',
  'আয়ান মর্শেদ',
]

function NameCycler() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [phase, setPhase] = useState('visible') // 'visible' | 'fading-out' | 'fading-in'
  const timeoutRef = useRef(null)

  useEffect(() => {
    const cycle = () => {
      // Start fading out
      setPhase('fading-out')

      timeoutRef.current = setTimeout(() => {
        // Switch to next name
        setCurrentIndex((prev) => (prev + 1) % names.length)
        setPhase('fading-in')

        timeoutRef.current = setTimeout(() => {
          setPhase('visible')

          // Wait before cycling again
          timeoutRef.current = setTimeout(cycle, 3000)
        }, 600)
      }, 600)
    }

    // Initial hold before first cycle
    timeoutRef.current = setTimeout(cycle, 3000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div className="name-cycler" aria-label="Ayan Morshed">
      <h1
        className={`name-cycler__text name-cycler__text--${phase}`}
        aria-hidden="true"
      >
        {names[currentIndex]}
      </h1>
    </div>
  )
}

export default NameCycler
