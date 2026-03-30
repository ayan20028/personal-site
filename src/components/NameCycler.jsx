import { useState, useEffect, useRef, useCallback } from 'react'
import './NameCycler.css'

const names = [
  'Ayan Morshed',
  'アヤン・モルシェド',
  'আয়ান মোর্শেদ',
]

function NameCycler() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [phase, setPhase] = useState('visible')
  const timeoutRef = useRef(null)

  const cycle = useCallback(() => {
    // Fade out (slide up)
    setPhase('fading-out')

    timeoutRef.current = setTimeout(() => {
      // Switch name, set to fading-in start state
      setCurrentIndex((prev) => (prev + 1) % names.length)
      setPhase('fading-in')

      // Double rAF so browser registers the start state before transitioning
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase('visible')

          // Wait, then cycle again
          timeoutRef.current = setTimeout(cycle, 2800)
        })
      })
    }, 500)
  }, [])

  useEffect(() => {
    timeoutRef.current = setTimeout(cycle, 2800)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [cycle])

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
