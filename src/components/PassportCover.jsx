import { motion } from 'framer-motion';
import { Plane, Sparkles } from 'lucide-react';

export default function PassportCover({ onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a111e]/90 backdrop-blur-md overflow-y-auto"
    >
      <div className="w-full max-w-sm flex flex-col items-center my-auto py-6">
        {/* Libreta del Pasaporte */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-full aspect-[1/1.48] max-w-[320px] rounded-2xl sm:rounded-3xl bg-linear-to-b from-[#0F274A] via-[#0A1D39] to-[#061224] p-6 text-center text-amber-100 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_rgba(29,78,216,0.25)] border border-amber-300/30 flex flex-col justify-between overflow-hidden group select-none"
        >
          {/* Lomo izquierdo del pasaporte (efecto de costura / relieve) */}
          <div className="absolute top-0 bottom-0 left-0 w-4 bg-linear-to-r from-black/40 via-white/5 to-transparent border-r border-amber-200/10 pointer-events-none" />
          
          {/* Textura de cuero y brillo sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-black/30 pointer-events-none" />

          {/* Marco interior dorado */}
          <div className="absolute inset-3 sm:inset-4 rounded-xl sm:rounded-2xl border border-amber-300/30 pointer-events-none">
            <div className="absolute inset-1 rounded-lg sm:rounded-xl border border-amber-300/15" />
          </div>

          {/* PARTE SUPERIOR */}
          <div className="relative z-10 pt-2">
            <div className="flex items-center justify-center gap-1.5 text-amber-200/80 mb-1">
              <Plane size={12} className="rotate-45" />
              <span className="font-cinzel text-[10px] tracking-[0.35em] uppercase">
                Destino Nupcial
              </span>
            </div>
            <h2 className="font-cinzel text-xs tracking-[0.45em] uppercase text-amber-200/90 font-semibold">
              Pasaporte
            </h2>
          </div>

          {/* PARTE CENTRAL: Escudo / Monograma Dorado */}
          <div className="relative z-10 my-auto py-2">
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full border-2 border-amber-300/50 flex flex-col items-center justify-center relative p-2 shadow-[0_0_25px_rgba(251,191,36,0.15)] bg-amber-400/5">
              {/* Anillo de puntos decorativos */}
              <div className="absolute inset-1.5 rounded-full border border-dashed border-amber-300/30" />
              
              <span className="font-script text-4xl sm:text-5xl text-amber-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] leading-none">
                W<span className="text-2xl text-amber-300 mx-0.5">&</span>R
              </span>

              <div className="flex items-center gap-1 mt-1 text-amber-200/70">
                <Sparkles size={10} />
                <span className="font-cinzel text-[8px] tracking-[0.2em] uppercase font-semibold">
                  15 · NOV · 2026
                </span>
                <Sparkles size={10} />
              </div>
            </div>

            {/* Texto Boda William y Rosa */}
            <div className="mt-4">
              <p className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-amber-300/80 font-medium">
                Boda
              </p>
              <h1 className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.18em] text-amber-100 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mt-0.5">
                William y Rosa
              </h1>
              <p className="font-serif-display text-xs text-amber-200/70 italic tracking-wider mt-1">
                Cochabamba, Bolivia
              </p>
            </div>
          </div>

          {/* PARTE INFERIOR: Símbolo Biométrico Dorado */}
          <div className="relative z-10 pb-2 flex flex-col items-center">
            {/* Ícono de pasaporte biométrico */}
            <div className="flex items-center gap-1 text-amber-300/50 mb-1">
              <div className="w-4 h-0.5 bg-amber-300/40" />
              <div className="w-4 h-2.5 rounded-xs border border-amber-300/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-300/50" />
              </div>
              <div className="w-4 h-0.5 bg-amber-300/40" />
            </div>
            <span className="font-cinzel text-[8px] tracking-[0.3em] uppercase text-amber-300/40">
              Boarding Pass Oficial
            </span>
          </div>
        </motion.div>

        {/* BOTÓN PARA ABRIR LA INVITACIÓN */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-[320px] mt-5 text-center"
        >
          <button
            onClick={onOpen}
            className="w-full py-3.5 px-6 rounded-xl bg-linear-to-r from-amber-300 via-amber-200 to-amber-400 text-[#09172e] font-cinzel text-sm sm:text-base font-bold tracking-[0.15em] uppercase shadow-[0_10px_30px_rgba(251,191,36,0.3)] hover:shadow-[0_15px_35px_rgba(251,191,36,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>Abrir Invitación</span>
            <Plane size={16} className="text-[#09172e] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <p className="font-serif-display text-xs text-amber-100/60 mt-2.5 tracking-wide italic">
            Toca para abrir la invitación y reproducir la música
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
