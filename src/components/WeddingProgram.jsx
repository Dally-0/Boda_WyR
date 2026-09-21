import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

// Custom line-art icons inspired by wedding stationery
const CoupleIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-10 h-10 text-cobalt">
    {/* Groom */}
    <circle cx="17" cy="15" r="5" />
    <path d="M10 38 v-9 a7 7 0 0 1 14 0 v9" />
    <path d="M15 24 l2 2 l2 -2" />
    {/* Bride with veil */}
    <circle cx="31" cy="17" r="5" />
    <path d="M25 38 v-8 a6 6 0 0 1 12 0 v8" />
    <path d="M26 13 q5 -5 10 0" />
    <path d="M36 14 c3 5 3 12 1 18" strokeDasharray="2 2" />
    {/* Heart above */}
    <path d="M24 7 c-1 -1.5 -2.5 -1.5 -3.5 0 c-1 1.5 3.5 4.5 3.5 4.5 s4.5 -3 3.5 -4.5 c-1 -1.5 -2.5 -1.5 -3.5 0" fill="currentColor" stroke="none" />
  </svg>
);

const ChurchIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-10 h-10 text-cobalt">
    {/* Cross */}
    <line x1="24" y1="5" x2="24" y2="12" />
    <line x1="21" y1="8" x2="27" y2="8" />
    {/* Steeple & Roof */}
    <path d="M24 12 l-12 11 v17 h24 v-17 z" />
    {/* Arch door */}
    <path d="M20 40 v-8 a4 4 0 0 1 8 0 v8" />
    {/* Rose window */}
    <circle cx="24" cy="23" r="3" />
  </svg>
);

const ReceptionIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-10 h-10 text-cobalt">
    {/* Archway with garland */}
    <path d="M12 40 V20 Q24 9 36 20 V40" />
    <line x1="8" y1="40" x2="40" y2="40" />
    {/* Chandelier / lantern */}
    <path d="M24 14 V21" />
    <polygon points="21,21 27,21 25,26 23,26" />
    {/* Sparkle */}
    <circle cx="24" cy="24" r="1" fill="currentColor" stroke="none" />
    <circle cx="17" cy="18" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="31" cy="18" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const CentralActIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-10 h-10 text-cobalt">
    {/* Two intertwined rings */}
    <ellipse cx="19" cy="25" rx="8" ry="9" />
    <ellipse cx="29" cy="25" rx="8" ry="9" />
    {/* Diamond sparkle */}
    <polygon points="19,13 22,16 19,19 16,16" fill="currentColor" stroke="none" />
    <circle cx="24" cy="9" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const ToastIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-10 h-10 text-cobalt">
    {/* Left flute */}
    <path d="M16 10 L22 22 C23 24 21 27 19 27 L18 27 L18 38 M13 38 L23 38" />
    <line x1="16" y1="10" x2="22" y2="10" />
    {/* Right flute */}
    <path d="M32 10 L26 22 C25 24 27 27 29 27 L30 27 L30 38 M25 38 L35 38" />
    <line x1="26" y1="10" x2="32" y2="10" />
    {/* Sparkles */}
    <circle cx="24" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="21" cy="7" r="1" fill="currentColor" stroke="none" />
    <circle cx="27" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const DinnerIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-10 h-10 text-cobalt">
    {/* Fork */}
    <path d="M11 12 v10 a4 4 0 0 0 4 4 v12 M15 12 v8 M13 12 v8" />
    {/* Knife */}
    <path d="M35 12 v26 M35 12 c-2 4 -2 10 0 14" />
    {/* Plate with heart */}
    <circle cx="23" cy="25" r="11" />
    <circle cx="23" cy="25" r="8" strokeDasharray="2 2" />
    <path d="M23 23 c-1 -1.5 -2.5 -1.5 -3.5 0 c-1 1.5 3.5 4.5 3.5 4.5 s4.5 -3 3.5 -4.5 c-1 -1.5 -2.5 -1.5 -3.5 0" fill="currentColor" stroke="none" />
  </svg>
);

const CakeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-10 h-10 text-cobalt">
    {/* Stand */}
    <line x1="12" y1="42" x2="36" y2="42" />
    <path d="M24 37 v5" />
    {/* Bottom tier */}
    <rect x="14" y="27" width="20" height="10" rx="2" />
    {/* Top tier */}
    <rect x="18" y="17" width="12" height="10" rx="2" />
    {/* Flowers on top */}
    <circle cx="24" cy="13" r="2" fill="currentColor" />
    <circle cx="21" cy="14" r="1.5" />
    <circle cx="27" cy="14" r="1.5" />
    {/* Decorative scallops */}
    <path d="M14 30 q5 2.5 10 0 q5 2.5 10 0" />
    <path d="M18 20 q3 2.5 6 0 q3 2.5 6 0" />
  </svg>
);

const BouquetIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-10 h-10 text-cobalt">
    {/* Central bouquet flowers */}
    <circle cx="24" cy="15" r="5" />
    <path d="M22 15 a2 2 0 0 1 4 0" />
    <circle cx="16" cy="19" r="4.5" />
    <circle cx="32" cy="19" r="4.5" />
    <circle cx="24" cy="23" r="4.5" />
    {/* Bouquet wrap */}
    <path d="M18 25 L21 38 L27 38 L30 25" />
    {/* Ribbon bow */}
    <path d="M24 38 c-3 2 -4 5 -5 6 M24 38 c3 2 4 5 5 6" />
    <circle cx="24" cy="38" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

// Compass star illustration exactly like reference card
const CompassRose = () => (
  <div className="relative flex flex-col items-center justify-center my-3">
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
      <svg viewBox="0 0 64 64" className="w-full h-full text-cobalt" fill="none" stroke="currentColor">
        {/* Radiating fine rays */}
        <g strokeWidth="0.75" opacity="0.35">
          <line x1="32" y1="6" x2="32" y2="58" />
          <line x1="6" y1="32" x2="58" y2="32" />
          <line x1="14" y1="14" x2="50" y2="50" />
          <line x1="14" y1="50" x2="50" y2="14" />
          <line x1="21" y1="9" x2="43" y2="55" />
          <line x1="9" y1="21" x2="55" y2="43" />
          <line x1="43" y1="9" x2="21" y2="55" />
          <line x1="9" y1="43" x2="55" y2="21" />
        </g>
        {/* 4-point compass star */}
        <polygon points="32,6 35,28 32,32 29,28" fill="#1D4ED8" stroke="none" />
        <polygon points="32,6 32,32 29,28" fill="#0F2C59" stroke="none" />
        <polygon points="32,58 35,36 32,32 29,36" fill="#1D4ED8" stroke="none" />
        <polygon points="32,58 32,32 35,36" fill="#0F2C59" stroke="none" />
        <polygon points="6,32 28,35 32,32 28,29" fill="#1D4ED8" stroke="none" />
        <polygon points="6,32 32,32 28,35" fill="#0F2C59" stroke="none" />
        <polygon points="58,32 36,35 32,32 36,29" fill="#1D4ED8" stroke="none" />
        <polygon points="58,32 32,32 36,29" fill="#0F2C59" stroke="none" />
        <circle cx="32" cy="32" r="2" fill="white" stroke="#1D4ED8" strokeWidth="1" />
      </svg>
      {/* Cardinal letter points */}
      <span className="absolute -top-1 font-cinzel text-[9px] font-bold text-cobalt-dark/80">N</span>
      <span className="absolute -bottom-1 font-cinzel text-[9px] font-bold text-cobalt-dark/80">S</span>
      <span className="absolute -left-1.5 font-cinzel text-[9px] font-bold text-cobalt-dark/80">O</span>
      <span className="absolute -right-1.5 font-cinzel text-[9px] font-bold text-cobalt-dark/80">E</span>
    </div>
  </div>
);

const events = [
  { time: '2:00 PM', label: 'Matrimonio Civil', Icon: CoupleIcon },
  { time: '4:00 PM', label: 'Matrimonio Religioso', Icon: ChurchIcon },
  { time: '5:00 PM', label: 'Recepción', Icon: ReceptionIcon },
  { time: '', label: 'Acto Central de la Boda', Icon: CentralActIcon },
  { time: '', label: 'Brindis de Honor', Icon: ToastIcon },
  { time: '', label: 'Banquete', Icon: DinnerIcon },
  { time: '', label: 'Pastel de Boda', Icon: CakeIcon },
  { time: '', label: 'Lanzamiento del Bouquet', Icon: BouquetIcon },
];

export default function WeddingProgram() {
  return (
    <>
      <motion.section
        id="program"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 sm:px-6 bg-ivory"
    >
      {/* Stationery Card Container */}
      <div className="max-w-sm sm:max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-cobalt/10 overflow-hidden">
        {/* Top Taupe/Beige Header Banner */}
        <div className="bg-[#EAE4D9] px-6 pt-6 pb-4 text-center border-b border-cobalt/10">
          <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-cobalt-dark">
            Día de la Boda
          </p>
          <div className="flex items-center justify-center gap-2 mt-1 mb-1">
            <div className="w-8 h-px bg-cobalt-dark/30" />
            <p className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] uppercase text-cobalt-dark/70 font-medium">
              Itinerario
            </p>
            <div className="w-8 h-px bg-cobalt-dark/30" />
          </div>

          {/* Compass Star with radiating lines */}
          <CompassRose />
        </div>

        {/* Timeline Body with central line and alternating items */}
        <div className="relative px-4 sm:px-6 pt-6 pb-8 bg-white">
          {/* Central Vertical Line */}
          <div className="absolute top-0 bottom-8 left-1/2 -translate-x-1/2 w-[1.5px] bg-cobalt-dark/25" />

          <div className="space-y-7 sm:space-y-8 relative">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="relative flex items-center min-h-[52px]"
                >
                  {/* Left Side */}
                  <div className="w-1/2 pr-5 sm:pr-6 flex items-center justify-end text-right">
                    {isEven ? (
                      <div>
                        {event.time ? (
                          <p className="font-cinzel text-sm sm:text-base font-bold text-cobalt-dark leading-tight">
                            {event.time}
                          </p>
                        ) : (
                          <span className="inline-block px-2 py-0.5 rounded-full bg-cobalt/10 text-cobalt font-cinzel text-[9px] tracking-wider uppercase font-semibold">
                            Celebración
                          </span>
                        )}
                        <p className="font-serif-display text-xs sm:text-sm text-cobalt-dark/85 font-medium mt-0.5 leading-snug">
                          {event.label}
                        </p>
                      </div>
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-end">
                        <event.Icon />
                      </div>
                    )}
                  </div>

                  {/* Horizontal Tick Mark on Central Line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-3.5 h-[1.5px] bg-cobalt-dark/40 z-10" />

                  {/* Right Side */}
                  <div className="w-1/2 pl-5 sm:pl-6 flex items-center justify-start text-left">
                    {isEven ? (
                      <div className="w-10 h-10 flex items-center justify-start">
                        <event.Icon />
                      </div>
                    ) : (
                      <div>
                        {event.time ? (
                          <p className="font-cinzel text-sm sm:text-base font-bold text-cobalt-dark leading-tight">
                            {event.time}
                          </p>
                        ) : (
                          <span className="inline-block px-2 py-0.5 rounded-full bg-cobalt/10 text-cobalt font-cinzel text-[9px] tracking-wider uppercase font-semibold">
                            Celebración
                          </span>
                        )}
                        <p className="font-serif-display text-xs sm:text-sm text-cobalt-dark/85 font-medium mt-0.5 leading-snug">
                          {event.label}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Terminal Tick Mark at base of vertical line */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-cobalt-dark/40" />
        </div>
      </div>
    </motion.section>

    {/* Breve indicación: ubicada debajo de la sección con id="program" */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="px-4 sm:px-6 pb-12 bg-ivory text-center"
    >
      <div className="max-w-sm sm:max-w-md mx-auto bg-white/80 backdrop-blur-xs rounded-xl p-4 border border-cobalt/15 text-center shadow-xs">
        <div className="flex items-center justify-center gap-1.5 text-cobalt mb-1.5">
          <MapPin size={15} className="text-cobalt" />
          <span className="font-cinzel text-xs font-bold tracking-wider uppercase">
            Misma Ubicación
          </span>
        </div>
        <p className="font-serif-display text-xs sm:text-sm text-cobalt-dark/85 font-medium leading-relaxed">
          Tanto el matrimonio civil como el religioso, el acto central y banquete se realizarán en el mismo lugar.
        </p>
      </div>
    </motion.div>
  </>
);
}
