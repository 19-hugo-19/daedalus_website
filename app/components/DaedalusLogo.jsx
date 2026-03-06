// Daedalus logo — partial gear arc (accent) wrapping the left of "D" + "DAEDALUS" text (white).
//
// Gear arc: 3 teeth, right-facing arc (~130° of a full gear).
// Center of the underlying full gear: (3, 14) in a 28×28 coordinate space.
// Outer radius 13, valley radius 10. Teeth face right, toward the "D".
// The concave inner edge of the arc sits just left of the "D"'s left stroke.
// Path is a closed crescent: outer teeth boundary + large inner arc back.
const GEAR_ARC_PATH =
  // Start: inner arc at -65° (upper tip of the crescent)
  'M 7.23,4.94 ' +
  // Short inner arc: -65° → -55° (before first tooth)
  'A 10,10 0 0,1 8.74,5.81 ' +
  // Jump to outer at -55° (first tooth, upper corner)
  'L 10.46,3.35 ' +
  // Outer arc across first tooth: -55° → -35°
  'A 13,13 0 0,1 13.65,6.54 ' +
  // Drop to inner at -35° (first valley end)
  'L 11.19,8.26 ' +
  // Inner arc through valley: -35° → -10°
  'A 10,10 0 0,1 12.85,12.26 ' +
  // Jump to outer at -10° (middle/main tooth, upper corner)
  'L 15.80,11.74 ' +
  // Outer arc across main tooth: -10° → +10°
  'A 13,13 0 0,1 15.80,16.26 ' +
  // Drop to inner at +10° (second valley start)
  'L 12.85,15.74 ' +
  // Inner arc through valley: +10° → +35°
  'A 10,10 0 0,1 11.19,19.74 ' +
  // Jump to outer at +35° (third tooth, lower corner)
  'L 13.65,21.46 ' +
  // Outer arc across third tooth: +35° → +55°
  'A 13,13 0 0,1 10.46,24.65 ' +
  // Drop to inner at +55° (lower edge of crescent)
  'L 8.74,22.19 ' +
  // Short inner arc: +55° → +65° (lower tip of the crescent)
  'A 10,10 0 0,1 7.23,23.06 ' +
  // Large inner arc back to start (going clockwise through 180° = back side of gear ring)
  'A 10,10 0 1,1 7.23,4.94 Z'

// Logo viewBox: 0 0 148 28
//   Gear arc (coords above, 28-unit space) sits on the left.
//   "DAEDALUS" text: x=18, y=20, font-size=17 — aligns vertically with gear center y=14.
export default function DaedalusLogo({ className = '', style }) {
  return (
    <svg
      viewBox="0 0 148 28"
      aria-label="DAEDALUS"
      role="img"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Partial gear arc — accent gold */}
      <path d={GEAR_ARC_PATH} fill="var(--accent, #c9a84c)" />

      {/* Full company name — white, D aligns with gear arc */}
      <text
        x="18"
        y="20"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="17"
        letterSpacing="0.3"
        fill="var(--text-primary, #f0f0f0)"
      >
        DAEDALUS
      </text>
    </svg>
  )
}
