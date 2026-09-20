import { motion } from 'framer-motion';

export default function Family() {
  return (
    <section id="family" className="relative my-4 overflow-hidden">
      {/* Top Deckle / Torn Paper Edge */}
      <div className="w-full overflow-hidden leading-none -mb-px">
        <svg viewBox="0 0 1200 32" preserveAspectRatio="none" className="w-full h-5 sm:h-7 block">
          <path
            d="M0 32 L0 16 Q25 12 50 18 Q80 22 110 14 Q140 10 170 18 Q200 23 230 15 Q260 11 290 19 Q320 22 350 14 Q380 10 410 18 Q440 23 470 15 Q500 11 530 19 Q560 22 590 14 Q620 10 650 18 Q680 23 710 15 Q740 11 770 19 Q800 22 830 14 Q860 10 890 18 Q920 23 950 15 Q980 11 1010 19 Q1040 22 1070 14 Q1100 10 1130 18 Q1160 21 1200 15 L1200 32 Z"
            fill="#162844"
          />
        </svg>
      </div>

      {/* Navy Deckle Card Content */}
      <div className="bg-[#162844] px-6 sm:px-10 py-10 text-center relative">
        <div className="max-w-md mx-auto">
          {/* Header Subtitle with thin gold lines */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 sm:w-12 h-px bg-[#C5A880]/50" />
            <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#C5A880]">
              Corte de Honor
            </p>
            <div className="w-8 sm:w-12 h-px bg-[#C5A880]/50" />
          </div>

          {/* Main Title */}
          <h2 className="font-cinzel text-2xl sm:text-3xl text-white font-medium tracking-wider uppercase mb-10">
            Padres y Padrinos
          </h2>

          {/* Parents 2-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 text-center">
            {/* Groom's Parents */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-1.5"
            >
              <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-[#C5A880] font-semibold mb-3">
                Padres del Novio
              </p>
              <p className="font-serif-display text-base text-white/95 font-medium leading-snug">
                Willy Cruz Villca
              </p>
              <p className="text-[#C5A880]/80 text-xs italic">&</p>
              <p className="font-serif-display text-base text-white/95 font-medium leading-snug">
                Esther Huanca Chino
              </p>
            </motion.div>

            {/* Bride's Parents */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1.5"
            >
              <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-[#C5A880] font-semibold mb-3">
                Padres de la Novia
              </p>
              <p className="font-serif-display text-base text-white/95 font-medium leading-snug">
                Fernando Bernardo Intipampa Quispe
              </p>
              <p className="text-[#C5A880]/80 text-xs italic">&</p>
              <p className="font-serif-display text-base text-white/95 font-medium leading-snug">
                María Zulema Fuentes Nava
              </p>
            </motion.div>
          </div>

          {/* Golden Divider */}
          <div className="flex items-center justify-center gap-3 my-8">
            <div className="w-16 h-px bg-[#C5A880]/30" />
            <span className="text-[#C5A880] text-xs">✦</span>
            <div className="w-16 h-px bg-[#C5A880]/30" />
          </div>

          {/* Civil Godparents (Padrinos de Civil) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2 mb-10"
          >
            <p className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#C5A880] font-semibold mb-3">
              Padrinos de Matrimonio Civil
            </p>
            <p className="font-serif-display text-base sm:text-lg text-white font-medium">
              Hilarión Lovera Calle
            </p>
            <p className="text-[#C5A880]/80 text-xs italic">&</p>
            <p className="font-serif-display text-base sm:text-lg text-white font-medium">
              Maria Elena Mamani Espinoza de Lovera
            </p>
          </motion.div>

          {/* Invitation Honor Footer */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6 border-t border-[#C5A880]/20"
          >
            <p className="font-serif-display text-xs tracking-[0.2em] uppercase text-white/70 mb-3">
              Tienen el honor de invitarle al enlace matrimonial de
            </p>
            <p className="font-script text-3xl sm:text-4xl text-[#E8D3B9]">
              William Cesar <span className="text-2xl font-serif text-[#C5A880]">&</span> Rosa Gricelda
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Deckle / Torn Paper Edge */}
      <div className="w-full overflow-hidden leading-none -mt-px">
        <svg viewBox="0 0 1200 32" preserveAspectRatio="none" className="w-full h-5 sm:h-7 block">
          <path
            d="M0 0 L1200 0 L1200 16 Q1175 20 1150 14 Q1120 10 1090 18 Q1060 22 1030 14 Q1000 10 970 18 Q940 22 910 14 Q880 10 850 18 Q820 22 790 14 Q760 10 730 18 Q700 22 670 14 Q640 10 610 18 Q580 22 550 14 Q520 10 490 18 Q460 22 430 14 Q400 10 370 18 Q340 22 310 14 Q280 10 250 18 Q220 22 190 14 Q160 10 130 18 Q100 22 70 14 Q40 10 0 16 Z"
            fill="#162844"
          />
        </svg>
      </div>
    </section>
  );
}
