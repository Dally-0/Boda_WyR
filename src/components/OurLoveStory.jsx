import { motion } from 'framer-motion';
import TornPaperPhotoFrame from './TornPaperPhotoFrame';

export default function OurLoveStory() {
  return (
    <section id="our-story" className="relative py-16 bg-ivory overflow-hidden">
      {/* Torn Paper Photo with hand-cut paper edge */}
      <div className="mb-12">
        <TornPaperPhotoFrame
          src="/fotos/_MG_3407.jpg.jpeg"
          alt="William y Rosa - Nuestra Historia"
          objectPosition="object-[center_28%]"
          height="h-80 sm:h-96 md:h-[420px]"
        />
      </div>

      <div className="max-w-md mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="font-script text-4xl sm:text-5xl text-cobalt mb-2"
        >
          Nuestra Historia
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-display text-sm text-cobalt-dark/50 tracking-wider uppercase mb-8"
        >
          Nuestra Historia de Amor
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <p className="font-serif-display text-base sm:text-lg text-cobalt-dark/80 leading-relaxed">
            Nuestro amor nació de la manera más inesperada. Dos almas que caminaban por senderos 
            distintos y que el destino decidió cruzar en el momento perfecto.
          </p>
          <p className="font-serif-display text-base sm:text-lg text-cobalt-dark/80 leading-relaxed">
            Desde esa primera mirada, supimos que algo especial estaba comenzando. 
            Juntos hemos recorrido montañas, compartido sueños y construido un amor 
            que crece con cada amanecer.
          </p>
          <p className="font-serif-display text-base sm:text-lg text-cobalt-dark/80 leading-relaxed italic">
            Porque cada día es una oportunidad nueva… y elegimos vivirla juntos, para siempre.
          </p>
        </motion.div>

        {/* Decorative heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-cobalt/30 mx-auto">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
