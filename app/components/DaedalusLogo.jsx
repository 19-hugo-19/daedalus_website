// Daedalus logo — gear (accent) with "D" inside the hub, then "AEDALUS" in white.
// Gear: 28×28 viewBox, center (14,14), outer R=13, valley R=10, hub hole R=7, 8 teeth ±10°.
// Hub hole is created by the second subpath (evenodd rule), leaving the dark bg visible so
// the white "D" text inside reads clearly against it.
const GEAR_PATH =
  'M 26.80,11.74 L 26.80,16.26 L 23.85,15.74 L 22.19,19.74 ' +
  'L 24.65,21.46 L 21.46,24.65 L 19.74,22.19 L 15.74,23.85 ' +
  'L 16.26,26.80 L 11.74,26.80 L 12.26,23.85 L 8.26,22.19 ' +
  'L 6.54,24.65 L 3.35,21.46 L 5.81,19.74 L 4.15,15.74 ' +
  'L 1.20,16.26 L 1.20,11.74 L 4.15,12.26 L 5.81,8.26 ' +
  'L 3.35,6.54 L 6.54,3.35 L 8.26,5.81 L 12.26,4.15 ' +
  'L 11.74,1.20 L 16.26,1.20 L 15.74,4.15 L 19.74,5.81 ' +
  'L 21.46,3.35 L 24.65,6.54 L 22.19,8.26 L 23.85,12.26 Z ' +
  // Hub hole — evenodd punches this out so the D inside is visible
  'M 21,14 A 7,7 0 1 0 7,14 A 7,7 0 1 0 21,14 Z'

// Full logo viewBox: 0 0 148 28
//   Gear (28×28) at x=0: gold gear, hub hole exposes dark bg behind the white "D"
//   "D" SVG text: centered in gear hub at (14,18.5)
//   "AEDALUS" text: starts at x=33, baseline y=20, font-size 17
export default function DaedalusLogo({ className = '', style }) {
  return (
    <svg
      viewBox="0 0 148 28"
      aria-label="DAEDALUS"
      role="img"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Gear body + hub hole (evenodd) */}
      <g fill="var(--accent, #c9a84c)" fillRule="evenodd">
        <path d={GEAR_PATH} />
      </g>

      {/* "D" inside the gear hub — white, centered at gear center (14,14) */}
      <text
        x="14"
        y="18.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="11"
        fill="var(--text-primary, #f0f0f0)"
      >
        D
      </text>

      {/* "AEDALUS" — white wordmark completing the name */}
      <text
        x="33"
        y="20"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="17"
        letterSpacing="0.5"
        fill="var(--text-primary, #f0f0f0)"
      >
        AEDALUS
      </text>
    </svg>
  )
}
