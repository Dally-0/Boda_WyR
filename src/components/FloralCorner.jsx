import { motion } from 'framer-motion';

export default function FloralCorner({ className = '', flip = false }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      {/* Stem */}
      <path
        d="M180 200 C160 160, 120 140, 80 120 C60 110, 40 90, 30 60 C25 45, 20 30, 15 10"
        stroke="#1D4ED8"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Branch 1 */}
      <path
        d="M120 140 C110 120, 90 110, 70 100"
        stroke="#1D4ED8"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Daisy 1 - large */}
      <g transform="translate(30, 55)">
        <ellipse cx="0" cy="-12" rx="4" ry="11" fill="none" stroke="#1D4ED8" strokeWidth="1.2" />
        <ellipse cx="0" cy="-12" rx="4" ry="11" fill="none" stroke="#1D4ED8" strokeWidth="1.2" transform="rotate(45)" />
        <ellipse cx="0" cy="-12" rx="4" ry="11" fill="none" stroke="#1D4ED8" strokeWidth="1.2" transform="rotate(90)" />
        <ellipse cx="0" cy="-12" rx="4" ry="11" fill="none" stroke="#1D4ED8" strokeWidth="1.2" transform="rotate(135)" />
        <ellipse cx="0" cy="-12" rx="4" ry="11" fill="none" stroke="#1D4ED8" strokeWidth="1.2" transform="rotate(180)" />
        <ellipse cx="0" cy="-12" rx="4" ry="11" fill="none" stroke="#1D4ED8" strokeWidth="1.2" transform="rotate(225)" />
        <ellipse cx="0" cy="-12" rx="4" ry="11" fill="none" stroke="#1D4ED8" strokeWidth="1.2" transform="rotate(270)" />
        <ellipse cx="0" cy="-12" rx="4" ry="11" fill="none" stroke="#1D4ED8" strokeWidth="1.2" transform="rotate(315)" />
        <circle cx="0" cy="0" r="5" fill="#1D4ED8" opacity="0.15" stroke="#1D4ED8" strokeWidth="1" />
      </g>
      {/* Daisy 2 - medium */}
      <g transform="translate(70, 100)">
        <ellipse cx="0" cy="-9" rx="3" ry="8" fill="none" stroke="#1D4ED8" strokeWidth="1" />
        <ellipse cx="0" cy="-9" rx="3" ry="8" fill="none" stroke="#1D4ED8" strokeWidth="1" transform="rotate(51.4)" />
        <ellipse cx="0" cy="-9" rx="3" ry="8" fill="none" stroke="#1D4ED8" strokeWidth="1" transform="rotate(102.8)" />
        <ellipse cx="0" cy="-9" rx="3" ry="8" fill="none" stroke="#1D4ED8" strokeWidth="1" transform="rotate(154.3)" />
        <ellipse cx="0" cy="-9" rx="3" ry="8" fill="none" stroke="#1D4ED8" strokeWidth="1" transform="rotate(205.7)" />
        <ellipse cx="0" cy="-9" rx="3" ry="8" fill="none" stroke="#1D4ED8" strokeWidth="1" transform="rotate(257.1)" />
        <ellipse cx="0" cy="-9" rx="3" ry="8" fill="none" stroke="#1D4ED8" strokeWidth="1" transform="rotate(308.5)" />
        <circle cx="0" cy="0" r="4" fill="#1D4ED8" opacity="0.1" stroke="#1D4ED8" strokeWidth="1" />
      </g>
      {/* Daisy 3 - small */}
      <g transform="translate(15, 15)">
        <ellipse cx="0" cy="-7" rx="2.5" ry="6" fill="none" stroke="#1D4ED8" strokeWidth="1" />
        <ellipse cx="0" cy="-7" rx="2.5" ry="6" fill="none" stroke="#1D4ED8" strokeWidth="1" transform="rotate(60)" />
        <ellipse cx="0" cy="-7" rx="2.5" ry="6" fill="none" stroke="#1D4ED8" strokeWidth="1" transform="rotate(120)" />
        <ellipse cx="0" cy="-7" rx="2.5" ry="6" fill="none" stroke="#1D4ED8" strokeWidth="1" transform="rotate(180)" />
        <ellipse cx="0" cy="-7" rx="2.5" ry="6" fill="none" stroke="#1D4ED8" strokeWidth="1" transform="rotate(240)" />
        <ellipse cx="0" cy="-7" rx="2.5" ry="6" fill="none" stroke="#1D4ED8" strokeWidth="1" transform="rotate(300)" />
        <circle cx="0" cy="0" r="3" fill="#1D4ED8" opacity="0.1" stroke="#1D4ED8" strokeWidth="1" />
      </g>
      {/* Leaves */}
      <path d="M100 130 C95 115, 80 115, 85 130" stroke="#1D4ED8" strokeWidth="1" fill="none" />
      <path d="M55 80 C48 70, 38 72, 45 82" stroke="#1D4ED8" strokeWidth="1" fill="none" />
      {/* Small buds */}
      <circle cx="140" cy="155" r="2.5" fill="none" stroke="#1D4ED8" strokeWidth="1" />
      <circle cx="160" cy="170" r="2" fill="none" stroke="#1D4ED8" strokeWidth="1" />
    </motion.svg>
  );
}
