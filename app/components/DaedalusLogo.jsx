// Reusable Daedalus logo — gear icon (accent color) + "AEDALUS" wordmark (white)
// Gear path: 8-tooth, 24×24 viewBox, center (12,12), fillRule="evenodd" creates hub hole
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

// viewBox 0 0 150 32:
//   - Gear: 24×24 path, translated down 4px to center vertically in 32px height
//   - "AEDALUS" text starts at x=32, baseline y=23
export default function DaedalusLogo({ className = '', style }) {
  return (
    <svg
      viewBox="0 0 150 32"
      aria-label="DAEDALUS"
      role="img"
      className={className}
      style={{ display: 'block', ...style }}
    >
      {/* Gear icon — accent color, evenodd fills the hub hole automatically */}
      <g
        transform="translate(0, 4)"
        fill="var(--accent, #c9a84c)"
        fillRule="evenodd"
      >
        <path d={GEAR_PATH} />
      </g>

      {/* Wordmark: the "D" is represented by the gear, so only "AEDALUS" is text */}
      <text
        x="32"
        y="23"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="20"
        letterSpacing="1.5"
        fill="var(--text-primary, #f0f0f0)"
      >
        AEDALUS
      </text>
    </svg>
  )
}
