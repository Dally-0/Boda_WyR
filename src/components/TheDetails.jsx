import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';
import TornPaperPhotoFrame from './TornPaperPhotoFrame';

export default function TheDetails() {
  return (
    <section id="details" className="pt-16 pb-8 bg-ivory overflow-hidden">
      <div className="max-w-md mx-auto px-6 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="font-script text-4xl sm:text-5xl text-cobalt mb-2"
        >
          Los Detalles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-display text-sm text-cobalt-dark/50 tracking-wider uppercase mb-12"
        >
          Detalles del Evento
        </motion.p>

        {/* Dress Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shirt size={18} className="text-cobalt" />
            <h3 className="font-script text-2xl text-cobalt">Código de Vestimenta</h3>
          </div>
          <p className="font-cinzel text-base font-semibold text-cobalt-dark tracking-wider">
            Formal
          </p>
          {/* Dress icons */}
          <div className="flex justify-center gap-8 mt-6">
            <div className="text-center">
              <svg viewBox="0 0 60 100" className="w-12 h-20 mx-auto" fill="none" stroke="#1D4ED8" strokeWidth="1.5">
                {/* Suit */}
                <path d="M20 15 L15 10 L10 15 L15 50 L10 95 L25 95 L28 60 L30 55 L32 60 L35 95 L50 95 L45 50 L40 15 L35 10 L30 15" />
                <path d="M20 15 L30 30 L40 15" />
                <line x1="30" y1="30" x2="30" y2="55" />
                <path d="M25 10 Q30 5 35 10" />
              </svg>
            </div>
            <div className="text-center">
              <svg viewBox="0 0 60 100" className="w-12 h-20 mx-auto" fill="none" stroke="#1D4ED8" strokeWidth="1.5">
                {/* Dress */}
                <path d="M22 10 L20 25 L15 30 L20 35 L10 95 L50 95 L40 35 L45 30 L40 25 L38 10" />
                <path d="M22 10 Q30 5 38 10" />
                <path d="M20 25 Q30 30 40 25" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Torn Paper Photo moved to the bottom */}
      <div className="mt-4">
        <TornPaperPhotoFrame
          src="/fotos/20250906_173023.jpg.jpeg"
          alt="William y Rosa - Detalles"
          objectPosition="object-[center_35%]"
          height="h-72 sm:h-88 md:h-[380px]"
        />
      </div>
    </section>
  );
}
