import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function DestinationMap() {
  return (
    <motion.section
      id="destination"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-12 px-6 bg-ivory text-center overflow-hidden"
    >
      <div className="max-w-md mx-auto">
        {/* Section Header */}
        <p className="font-cinzel text-xs text-cobalt-dark/85 font-medium tracking-[0.25em] uppercase mb-2">
          Destino de Nuestra Boda
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-cobalt mb-6">
          Cochabamba, Bolivia
        </h2>

        {/* Circular Map Illustration */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-6"
        >
          <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white/80 bg-white/40">
            <img
              src="/cochabamba-map.png"
              alt="Mapa de Cochabamba, Bolivia - Destino de Boda"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-cobalt/10 shadow-md flex items-center gap-1.5 whitespace-nowrap"
          >
            <MapPin size={14} className="text-cobalt" />
            <span className="font-cinzel text-xs font-semibold text-cobalt tracking-wider">
              Cochabamba · Bolivia
            </span>
          </motion.div>
        </motion.div>

        <p className="font-serif-display text-sm text-cobalt-dark/85 font-medium italic mt-6 max-w-xs mx-auto leading-relaxed">
          "Ciudad de la Eterna Primavera, el lugar donde uniremos nuestros caminos para siempre"
        </p>
      </div>
    </motion.section>
  );
}
