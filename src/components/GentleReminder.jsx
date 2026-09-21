import { motion } from 'framer-motion';
import { PhoneOff, Heart } from 'lucide-react';
import FloralCorner from './FloralCorner';

export default function GentleReminder() {
  return (
    <section id="reminder" className="relative py-16 px-6 bg-ivory overflow-hidden">
      <FloralCorner className="absolute top-4 left-2 w-24 opacity-15 rotate-90" />
      <FloralCorner className="absolute top-4 right-2 w-24 opacity-15 -rotate-90" flip />

      <div className="max-w-md mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="font-script text-4xl sm:text-5xl text-cobalt mb-2"
        >
          Un último detalle
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-display text-sm text-cobalt-dark/85 font-medium tracking-wider uppercase mb-10"
        >
          Recordatorio Especial
        </motion.p>

        {/* Unplugged ceremony */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-cobalt/10 shadow-xs"
        >
          <PhoneOff size={28} className="text-cobalt mx-auto mb-4" />
          <h3 className="font-cinzel text-sm font-semibold text-cobalt-dark tracking-wider mb-3">
            Ceremonia sin dispositivos
          </h3>
          <p className="font-serif-display text-sm text-cobalt-dark/85 leading-relaxed">
            Les pedimos amablemente que guarden sus teléfonos y cámaras durante la ceremonia. 
            Disfruten este momento especial con nosotros y dejen que los profesionales 
            capturen cada instante.
          </p>
        </motion.div>

        {/* Final Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <div className="w-24 h-24 rounded-full border-2 border-cobalt/30 flex items-center justify-center mx-auto mb-6">
            <span className="font-script text-3xl text-cobalt">
              W<span className="text-xl mx-0.5 opacity-80">&</span>R
            </span>
          </div>
          <p className="font-serif-display text-base sm:text-lg text-cobalt-dark/90 leading-relaxed max-w-sm mx-auto">
            Con todo nuestro amor, les agradecemos por ser parte de este día tan especial. 
            Su presencia es el mejor regalo que podemos recibir.
          </p>
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-6"
          >
            <Heart size={28} className="text-cobalt/80 mx-auto" fill="currentColor" />
          </motion.div>
          <p className="font-script text-2xl text-cobalt mt-4">
            William & Rosa
          </p>
          <p className="font-serif-display text-xs text-cobalt-dark/80 font-medium tracking-wider mt-2 uppercase">
            15 · Noviembre · 2026
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-6 border-t border-cobalt/15 text-center">
        <p className="font-sans text-xs text-cobalt-dark/80 font-medium">
          Hecho con ❤️ para William & Rosa
        </p>
      </div>
    </section>
  );
}
