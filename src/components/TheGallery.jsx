import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import FloralCorner from './FloralCorner';

const photos = [
  { src: '/fotos/galeria-01-principal.webp', alt: 'William y Rosa' },
  { src: '/fotos/galeria-02-el-triunfo.webp', alt: 'Juntos en El Triunfo' },
  { src: '/fotos/detalles-boda.webp', alt: 'Columpio' },
  { src: '/fotos/galeria-03-aventura.webp', alt: 'Aventura juntos' },
  { src: '/fotos/galeria-04-noche-especial.webp', alt: 'Noche especial' },
  { src: '/fotos/nuevafoto5.webp', alt: 'Momentos felices' },
  { src: '/fotos/galeria-06-espejo.webp', alt: 'Espejo' },
  { src: '/fotos/galeria-07-vista-aerea.webp', alt: 'Vista aérea' },
  { src: '/fotos/galeria-08-pareja.webp', alt: 'Pareja' },
];

export default function TheGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = () => setSelectedIndex((prev) => (prev + 1) % photos.length);
  const goPrev = () => setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section id="gallery" className="relative py-16 bg-ivory overflow-hidden">
      {/* Floral decorations */}
      <FloralCorner className="absolute bottom-0 left-0 w-32 opacity-20 rotate-180" />
      <FloralCorner className="absolute bottom-0 right-0 w-32 opacity-20 rotate-180" flip />

      <div className="max-w-lg mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="font-script text-4xl sm:text-5xl text-cobalt mb-2"
        >
          Nuestra Galería
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-display text-sm text-cobalt-dark/85 font-medium tracking-wider uppercase mb-10"
        >
          Nuestros Recuerdos
        </motion.p>

        {/* Photo Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full object-cover ${
                  index === 0 ? 'h-48 sm:h-64' : 'h-24 sm:h-32'
                }`}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-cobalt-dark/0 hover:bg-cobalt-dark/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox-overlay fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={22} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 sm:left-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 sm:right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 font-sans text-sm">
              {selectedIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
