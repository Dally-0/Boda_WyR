import { motion } from 'framer-motion';

export default function TornPaperPhotoFrame({
  src,
  alt = 'Fotografía',
  objectPosition = 'object-center',
  className = '',
  height = 'h-80 sm:h-96 md:h-[440px]',
  paperColor = '#FDFBF7',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={`relative w-full overflow-hidden ${height} ${className}`}
    >
      {/* Background Photo */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${objectPosition}`}
      />

      {/* Top Torn Paper Overlay */}
      <div className="absolute -top-px left-0 right-0 z-10 pointer-events-none leading-none select-none">
        <svg
          viewBox="0 0 1200 75"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20 block"
        >
          <defs>
            <filter id="torn-paper-filter-top" x="-5%" y="-10%" width="110%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04 0.07" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" result="tornEdge" />
              <feDropShadow in="tornEdge" dx="0" dy="4" stdDeviation="3.5" floodColor="#0F2C59" floodOpacity="0.25" result="shadow" />
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="tornEdge" />
              </feMerge>
            </filter>
          </defs>

          {/* Solid base header to prevent any boundary gap */}
          <rect x="0" y="0" width="1200" height="15" fill={paperColor} />

          {/* Solid torn paper body with organic displacement */}
          <path
            d="M0,-10 L1200,-10 L1200,28 C1145,20 1105,42 1055,34 C1005,26 965,16 915,24 C865,32 825,44 775,36 C725,28 685,18 635,24 C585,30 545,46 495,38 C445,30 405,18 355,26 C305,34 265,44 215,36 C165,28 125,16 75,24 C40,30 18,38 0,32 Z"
            fill={paperColor}
            filter="url(#torn-paper-filter-top)"
          />

          {/* Exposed white fibrous torn paper deckle fringe */}
          <path
            d="M0,32 C18,38 40,30 75,24 C125,16 165,28 215,36 C265,44 305,34 355,26 C405,18 445,30 495,38 C545,46 585,30 635,24 C685,18 725,28 775,36 C825,44 865,32 915,24 C965,16 1005,26 1055,34 C1105,42 1145,20 1200,28"
            fill="none"
            stroke="white"
            strokeWidth="3.5"
            opacity="0.85"
            filter="url(#torn-paper-filter-top)"
          />
        </svg>
      </div>

      {/* Bottom Torn Paper Overlay */}
      <div className="absolute -bottom-px left-0 right-0 z-10 pointer-events-none leading-none select-none">
        <svg
          viewBox="0 0 1200 75"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20 block"
        >
          <defs>
            <filter id="torn-paper-filter-bottom" x="-5%" y="-40%" width="110%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04 0.07" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" result="tornEdge" />
              <feDropShadow in="tornEdge" dx="0" dy="-4" stdDeviation="3.5" floodColor="#0F2C59" floodOpacity="0.25" result="shadow" />
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="tornEdge" />
              </feMerge>
            </filter>
          </defs>

          {/* Solid base footer to prevent any boundary gap */}
          <rect x="0" y="55" width="1200" height="20" fill={paperColor} />

          {/* Solid torn paper body with organic displacement */}
          <path
            d="M0,42 C25,48 50,32 100,40 C150,48 190,56 240,46 C290,36 330,24 380,34 C430,44 470,54 520,44 C570,34 610,24 660,32 C710,40 750,56 800,46 C850,36 890,26 940,34 C990,42 1030,52 1080,44 C1130,36 1165,48 1200,42 L1200,90 L0,90 Z"
            fill={paperColor}
            filter="url(#torn-paper-filter-bottom)"
          />

          {/* Exposed white fibrous torn paper deckle fringe */}
          <path
            d="M0,42 C25,48 50,32 100,40 C150,48 190,56 240,46 C290,36 330,24 380,34 C430,44 470,54 520,44 C570,34 610,24 660,32 C710,40 750,56 800,46 C850,36 890,26 940,34 C990,42 1030,52 1080,44 C1130,36 1165,48 1200,42"
            fill="none"
            stroke="white"
            strokeWidth="3.5"
            opacity="0.85"
            filter="url(#torn-paper-filter-bottom)"
          />
        </svg>
      </div>
    </motion.div>
  );
}
