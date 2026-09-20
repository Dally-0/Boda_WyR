export default function TornPaperDivider({ color = '#FDFBF7', direction = 'down', className = '' }) {
  if (direction === 'down') {
    return (
      <div className={`w-full overflow-hidden leading-none -mt-px ${className}`}>
        <svg
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
          className="w-full h-4 sm:h-6 block"
        >
          <path
            d="M0 12 Q30 16 60 11 Q90 7 120 13 Q150 17 180 11 Q210 8 240 14 Q270 18 300 12 Q330 8 360 14 Q390 17 420 11 Q450 7 480 13 Q510 17 540 12 Q570 8 600 14 Q630 18 660 12 Q690 8 720 14 Q750 17 780 11 Q810 7 840 13 Q870 17 900 12 Q930 8 960 14 Q990 17 1020 12 Q1050 7 1080 13 Q1110 17 1140 11 Q1170 8 1200 13 L1200 30 L0 30 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden leading-none -mb-px ${className}`}>
      <svg
        viewBox="0 0 1200 30"
        preserveAspectRatio="none"
        className="w-full h-4 sm:h-6 block"
      >
        <path
          d="M0 18 Q30 14 60 19 Q90 23 120 17 Q150 13 180 19 Q210 22 240 16 Q270 12 300 18 Q330 22 360 16 Q390 13 420 19 Q450 23 480 17 Q510 13 540 18 Q570 22 600 16 Q630 12 660 18 Q690 22 720 16 Q750 13 780 19 Q810 23 840 17 Q870 13 900 18 Q930 22 960 16 Q990 13 1020 18 Q1050 23 1080 17 Q1110 13 1140 19 Q1170 22 1200 17 L1200 0 L0 0 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
