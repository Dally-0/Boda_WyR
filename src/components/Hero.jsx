import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FloralCorner from './FloralCorner';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="/fotos/_MG_3621.jpg.jpeg"
          alt="William y Rosa"
          className="w-full h-full object-cover object-[center_25%] animate-[ken-burns_25s_ease-in-out_infinite_alternate]"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Floral decorations */}
      <FloralCorner className="absolute top-4 left-2 w-28 sm:w-36 opacity-40 z-10" />
      <FloralCorner className="absolute top-4 right-2 w-28 sm:w-36 opacity-40 z-10" flip />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center text-white"
      >
        {/* Monogram */}
        <motion.div
          variants={fadeUp}
          className="monogram-ring w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm mb-6"
        >
          <span className="font-script text-5xl sm:text-6xl text-white drop-shadow-lg">
            W<span className="text-3xl sm:text-4xl mx-1 opacity-80">&</span>R
          </span>
        </motion.div>

        {/* Names */}
        <motion.h1
          variants={fadeUp}
          className="font-script text-4xl sm:text-5xl md:text-6xl mb-2 drop-shadow-lg"
        >
          William & Rosa
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-cinzel text-xs sm:text-sm tracking-[0.35em] uppercase mb-8 opacity-90"
        >
          Nos casamos
        </motion.p>

        {/* Date */}
        <motion.div variants={fadeUp} className="mb-8">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="font-cinzel text-sm sm:text-base tracking-[0.2em] uppercase">
              Noviembre
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white/60 flex items-center justify-center">
              <span className="font-cinzel text-3xl sm:text-4xl font-bold">15</span>
            </div>
            <div className="font-cinzel text-sm sm:text-base tracking-[0.2em] uppercase">
              2026
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.p
          variants={fadeUp}
          className="font-serif-display text-sm sm:text-base italic max-w-xs opacity-90 leading-relaxed"
        >
          "Cada día es una oportunidad nueva"
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          onClick={() => {
            const nextEl = document.getElementById('countdown');
            if (nextEl) {
              nextEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="absolute bottom-20 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer select-none group z-20"
        >
          <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] uppercase text-white/90 drop-shadow-md group-hover:text-white transition-colors mb-1 whitespace-nowrap">
            Desliza hacia abajo
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center -space-y-2 text-white/80 group-hover:text-white transition-colors"
          >
            <ChevronDown size={22} className="drop-shadow-md" />
            <ChevronDown size={22} className="opacity-50 drop-shadow-md" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
