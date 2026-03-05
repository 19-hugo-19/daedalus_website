import styles from './SpinningBadge.module.css'

export default function SpinningBadge() {
  return (
    <div className={styles.wrap}>
      {/* Rotating text ring */}
      <svg viewBox="0 0 120 120" className={styles.textRing} aria-hidden="true">
        <defs>
          <path
            id="badgeCircle"
            d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
          />
        </defs>
        <text fontSize="7.2" fill="currentColor" letterSpacing="2">
          <textPath href="#badgeCircle">
            DAEDALUS STUDIO · EST 2026 · DAEDALUS STUDIO · EST 2026 ·
          </textPath>
        </text>
      </svg>

      {/* Static gear center */}
      <div className={styles.center}>
        <svg
          viewBox="0 0 24 24"
          className={styles.gear}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.34.07-.68.07-1.08s-.03-.74-.07-1.08l2.32-1.82c.21-.16.27-.46.13-.7l-2.2-3.82c-.13-.24-.42-.32-.66-.24l-2.74 1.1c-.57-.44-1.18-.8-1.86-1.08l-.4-2.92c-.04-.26-.26-.44-.52-.44h-4.4c-.26 0-.48.18-.52.44l-.4 2.92c-.68.28-1.29.64-1.86 1.08l-2.74-1.1c-.24-.08-.53 0-.66.24l-2.2 3.82c-.14.24-.08.54.13.7l2.32 1.82c-.04.34-.07.69-.07 1.08s.03.74.07 1.08L2.84 14c-.21.16-.27.46-.13.7l2.2 3.82c.13.24.42.32.66.24l2.74-1.1c.57.44 1.18.8 1.86 1.08l.4 2.92c.04.26.26.44.52.44h4.4c.26 0 .48-.18.52-.44l.4-2.92c.68-.28 1.29-.64 1.86-1.08l2.74 1.1c.24.08.53 0 .66-.24l2.2-3.82c.14-.24.08-.54-.13-.7l-2.32-1.82z" />
        </svg>
      </div>
    </div>
  )
}
