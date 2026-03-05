import styles from './SpinningBadge.module.css'

// 8-tooth gear, 24×24 viewBox, center (12,12)
// Outer radius 11 (teeth tips), root radius 8 (valleys), hub hole radius 3.5
// Each tooth is ±8° wide; valleys at ±22.5° from tooth centers (45° pitch)
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

export default function SpinningBadge() {
  return (
    <div className={styles.wrap}>
      {/* Rotating text ring — viewBox 140×140, text circle r=58 ≈ circumference 364 */}
      <svg viewBox="0 0 140 140" className={styles.textRing} aria-hidden="true">
        <defs>
          <path
            id="badgeCircle"
            d="M 70,70 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
          />
        </defs>
        <text fontSize="9.5" fill="currentColor">
          <textPath
            href="#badgeCircle"
            textLength="364"
            lengthAdjust="spacing"
          >
            DAEDALUS STUDIO · EST 2026 · WEB DEV ·
          </textPath>
        </text>
      </svg>

      {/* Counter-rotating gear */}
      <div className={styles.center}>
        <svg
          viewBox="0 0 24 24"
          className={styles.gear}
          fill="currentColor"
          fillRule="evenodd"
          aria-hidden="true"
        >
          <path d={GEAR_PATH} />
        </svg>
      </div>
    </div>
  )
}
