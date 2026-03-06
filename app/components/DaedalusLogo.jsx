import styles from './DaedalusLogo.module.css'

// Static logo: accent-colored "(D)" bracket + white "AEDALUS".
// Fully text-based — scales with font-size set by the parent context.
export default function DaedalusLogo({ className = '', style }) {
  return (
    <span className={`${styles.root} ${className}`} style={style}>
      <span className={styles.bracket}>(D)</span>AEDALUS
    </span>
  )
}
