import { useState, useEffect } from 'react'
import styles from './IntroAnimation.module.css'

// Same 8-tooth gear path used in SpinningBadge and DaedalusLogo
const GEAR_PATH =
  'M 19.39,8.94 L 19.92,10.89 L 22.89,10.47 L 22.89,13.53 L 19.92,13.11 L 19.39,15.06 ' +
  'L 18.39,16.82 L 20.79,18.62 L 18.62,20.79 L 16.82,18.39 L 15.06,19.39 ' +
  'L 13.11,19.92 L 13.53,22.89 L 10.47,22.89 L 10.89,19.92 L 8.94,19.39 ' +
  'L 7.18,18.39 L 5.38,20.79 L 3.21,18.62 L 5.61,16.82 L 4.61,15.06 ' +
  'L 4.08,13.11 L 1.11,13.53 L 1.11,10.47 L 4.08,10.89 L 4.61,8.94 ' +
  'L 5.61,7.18 L 3.21,5.38 L 5.38,3.21 L 7.18,5.61 L 8.94,4.61 ' +
  'L 10.89,4.08 L 10.47,1.11 L 13.53,1.11 L 13.11,4.08 L 15.06,4.61 ' +
  'L 16.82,5.61 L 18.62,3.21 L 20.79,5.38 L 18.39,7.18 L 19.39,8.94 Z ' +
  'M 15.5,12 A 3.5,3.5 0 1 0 8.5,12 A 3.5,3.5 0 1 0 15.5,12 Z'

const phases = [
  { id: 'empty',    duration: 600  },
  { id: 'name',     duration: 1400 },
  { id: 'subtitle', duration: 1400 },
  { id: 'exit',     duration: 900  },
  { id: 'done',     duration: 0    },
]

// Constellation: positions as % of viewport, connected by lines
// Loosely resembles a labyrinth path / maze fragment
const STARS = [
  { id: 's1',  x: 12,  y: 18,  r: 1.5, dur: '3.2s', delay: '0s'    },
  { id: 's2',  x: 18,  y: 32,  r: 1,   dur: '4.1s', delay: '0.5s'  },
  { id: 's3',  x: 8,   y: 52,  r: 1.5, dur: '2.8s', delay: '1.1s'  },
  { id: 's4',  x: 22,  y: 68,  r: 1,   dur: '3.6s', delay: '0.3s'  },
  { id: 's5',  x: 14,  y: 80,  r: 2,   dur: '4.4s', delay: '0.8s'  },
  { id: 's6',  x: 85,  y: 15,  r: 1.5, dur: '3.0s', delay: '0.2s'  },
  { id: 's7',  x: 78,  y: 28,  r: 1,   dur: '4.2s', delay: '0.9s'  },
  { id: 's8',  x: 90,  y: 45,  r: 2,   dur: '2.6s', delay: '0.4s'  },
  { id: 's9',  x: 82,  y: 62,  r: 1,   dur: '3.8s', delay: '1.3s'  },
  { id: 's10', x: 88,  y: 78,  r: 1.5, dur: '3.3s', delay: '0.6s'  },
  { id: 's11', x: 35,  y: 10,  r: 1,   dur: '4.0s', delay: '0.7s'  },
  { id: 's12', x: 62,  y: 88,  r: 1.5, dur: '3.5s', delay: '1.0s'  },
]

// Pairs to draw faint lines between (maze-path feel)
const LINES = [
  ['s1',  's2'],
  ['s2',  's3'],
  ['s3',  's4'],
  ['s4',  's5'],
  ['s6',  's7'],
  ['s7',  's8'],
  ['s8',  's9'],
  ['s9',  's10'],
  ['s11', 's1'],
  ['s12', 's10'],
]

function getStarById(id) {
  return STARS.find(s => s.id === id)
}

export default function IntroAnimation({ onComplete, onFadeStart }) {
  const [phase, setPhase] = useState('empty')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const sequence = async () => {
      for (const p of phases) {
        if (p.id === 'done') {
          setVisible(false)
          setTimeout(() => onComplete?.(), 600)
          return
        }
        setPhase(p.id)
        if (p.id === 'exit') onFadeStart?.()
        await new Promise((r) => setTimeout(r, p.duration))
      }
    }
    sequence()
  }, [onComplete, onFadeStart])

  if (!visible && phase === 'done') return null

  const isExiting    = phase === 'exit' || phase === 'done'
  const pastEmpty    = phase !== 'empty'
  const showSubtitle = phase === 'subtitle' || isExiting
  const showName     = phase === 'name' || showSubtitle

  return (
    <div className={`${styles.overlay} ${isExiting ? styles.exiting : ''}`}>

      {/* Greek key border */}
      <div className={`${styles.greekBorder} ${pastEmpty ? styles.greekBorderVisible : ''}`} />

      {/* Constellation dots */}
      <div className={`${styles.stars} ${pastEmpty ? styles.starsVisible : ''}`}>
        {STARS.map(s => (
          <div
            key={s.id}
            className={styles.star}
            style={{
              left:  `${s.x}%`,
              top:   `${s.y}%`,
              width:  `${s.r * 2}px`,
              height: `${s.r * 2}px`,
              '--dur':   s.dur,
              '--delay': s.delay,
            }}
          />
        ))}
      </div>

      {/* Constellation lines */}
      <svg
        className={`${styles.constellationSvg} ${pastEmpty ? styles.constellationSvgVisible : ''}`}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {LINES.map(([a, b]) => {
          const sa = getStarById(a)
          const sb = getStarById(b)
          return (
            <line
              key={`${a}-${b}`}
              x1={sa.x} y1={sa.y}
              x2={sb.x} y2={sb.y}
              stroke="rgba(201,168,76,0.12)"
              strokeWidth="0.2"
            />
          )
        })}
      </svg>

      {/* Progress bar */}
      <div className={styles.progress}>
        <div className={`${styles.progressBar} ${pastEmpty ? styles.progressBarRunning : ''}`} />
      </div>

      <div className={styles.center}>

        {/* Gear icon — fades + scales in with the name, then spins continuously */}
        <div className={`${styles.introGearWrap} ${showName ? styles.introGearWrapVisible : ''}`}>
          <svg
            viewBox="0 0 24 24"
            className={styles.introGear}
            fill="#c9a84c"
            fillRule="evenodd"
            aria-hidden="true"
            width="48"
            height="48"
          >
            <path d={GEAR_PATH} />
          </svg>
        </div>

        {/* Name */}
        <div className={styles.name}>
          <span className={`${styles.nameInner} ${showName ? styles.nameInnerVisible : ''}`}>
            DAEDALUS
          </span>
        </div>

        {/* Gold line */}
        <div className={`${styles.line} ${showSubtitle ? styles.lineVisible : ''}`} />

        {/* Subtitle */}
        <div className={styles.subtitle}>
          <SubtitleChars active={showSubtitle} />
        </div>

      </div>
    </div>
  )
}

function SubtitleChars({ active }) {
  const text = 'WEB DEVELOPMENT'
  return (
    <div className={`${styles.subtitleInner} ${active ? styles.subtitleInnerVisible : ''}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`${styles.char} ${active ? styles.charIn : ''}`}
          style={{ transitionDelay: active ? `${i * 38}ms` : '0ms' }}
        >
          {char}
        </span>
      ))}
      {active && <span className={styles.cursor} />}
    </div>
  )
}
