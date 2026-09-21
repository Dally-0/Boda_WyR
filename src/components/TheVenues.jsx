import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Compass } from 'lucide-react';

export default function TheVenues() {
  return (
    <motion.section
      id="venues"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-6 bg-ivory"
    >
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-script text-4xl sm:text-5xl text-cobalt mb-2">
          La Celebración
        </h2>
        <p className="font-cinzel text-xs text-cobalt-dark/85 font-medium tracking-[0.25em] uppercase mb-8">
          Lugar del Evento
        </p>

        {/* Circular Map of Bolivia / Cochabamba */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto mb-10"
        >
          <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white bg-white/50">
            <img
              src="/cochabamba-map.png"
              alt="Mapa de Cochabamba, Bolivia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1 rounded-full border border-cobalt/15 shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <MapPin size={13} className="text-cobalt" />
            <span className="font-cinzel text-xs font-semibold text-cobalt tracking-wider">
              Cochabamba · Bolivia
            </span>
          </div>
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-cobalt/10 shadow-lg"
        >
          {/* Venue Split: Left Photo, Right Google Maps */}
          <div className="grid grid-cols-2 h-56 sm:h-72 overflow-hidden">
            {/* Left: Photo */}
            <div className="relative w-full h-full overflow-hidden bg-cobalt-dark/10">
              <img
                src="/fotos/salon-los-jardines.webp"
                alt="Centro de Eventos Los Jardines"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cobalt-dark/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 pointer-events-none text-left">
                <p className="font-cinzel text-white text-xs sm:text-sm font-semibold drop-shadow-md">
                  El Salón
                </p>
                <p className="font-serif-display text-white/90 text-xs sm:text-sm italic drop-shadow">
                  Los Jardines
                </p>
              </div>
            </div>

            {/* Right: Google Maps Embed */}
            <div className="relative w-full h-full overflow-hidden bg-cobalt-dark/5 border-l border-cobalt/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18989.853517503423!2d-66.25064957869564!3d-17.371155010317366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e30b2c3321073f%3A0x9142c6d7c7a38ee1!2sCentro%20de%20Eventos%20Los%20Jardines!5e0!3m2!1ses!2sbo!4v1789863844364!5m2!1ses!2sbo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Mapa Centro de Eventos Los Jardines"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Venue Details */}
          <div className="p-6">
            <div className="flex items-start gap-3 mb-5">
              <MapPin size={22} className="text-cobalt mt-0.5 shrink-0" />
              <div className="text-left">
                <p className="font-serif-display text-xl sm:text-2xl text-cobalt-dark font-semibold leading-snug">
                  Centro de Eventos Los Jardines
                </p>
                <p className="font-cinzel text-xs text-[#C5A880] font-semibold tracking-[0.2em] uppercase mt-0.5">
                  Colcapirhua · Cochabamba
                </p>
              </div>
            </div>

            {/* All-in-one celebration notice */}
            <div className="bg-cobalt/5 border border-cobalt/10 rounded-xl p-4 mb-6 text-center">
              <p className="font-serif-display text-base sm:text-lg text-cobalt-dark font-medium leading-relaxed">
                Toda nuestra boda — Ceremonia y Recepción — se llevará a cabo en este mismo lugar.
              </p>
              <p className="font-serif-display text-sm text-cobalt/85 mt-1.5 italic">
                ¡Acompáñanos a compartir cada momento en un solo lugar especial!
              </p>
            </div>

            {/* Passport-Style Google Maps Button */}
            <a
              href="https://maps.app.goo.gl/tvtgBmKdhkSC23aC7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full bg-gradient-to-br from-[#0D1F3C] via-[#162C54] to-[#0A182F] rounded-2xl p-4 sm:p-5 border border-[#C5A880]/60 hover:border-[#C5A880] shadow-[0_8px_24px_rgba(13,31,60,0.28)] hover:shadow-[0_12px_32px_rgba(13,31,60,0.4)] transition-all duration-300 overflow-hidden text-left"
            >
              {/* Decorative passport compass watermark */}
              <div className="absolute -right-4 -bottom-4 w-28 h-28 opacity-10 pointer-events-none text-[#C5A880]">
                <Compass size={112} strokeWidth={1.2} />
              </div>

              {/* Passport Header Strip */}
              <div className="flex items-center justify-between border-b border-[#C5A880]/30 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
                  <span className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
                    PASAPORTE AL EVENTO
                  </span>
                </div>
                <span className="font-cinzel text-[9px] sm:text-[10px] text-[#C5A880]/80 tracking-widest uppercase">
                  DESTINO · BOLIVIA
                </span>
              </div>

              {/* Stamp + Call To Action */}
              <div className="flex items-center gap-3.5">
                {/* Circular Visa / Entry Stamp */}
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-dashed border-[#C5A880]/80 bg-[#0A1629]/70 flex flex-col items-center justify-center text-[#C5A880] -rotate-6 group-hover:rotate-0 transition-transform duration-300 shadow-inner">
                  <span className="font-cinzel text-[7px] tracking-tight uppercase font-bold text-[#C5A880]">ENTRY</span>
                  <MapPin size={16} className="text-[#C5A880] my-0.5" />
                  <span className="font-cinzel text-[7px] tracking-widest uppercase text-[#C5A880]">15·NOV</span>
                </div>

                {/* Text Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-white">
                    <p className="font-cinzel text-sm sm:text-base font-semibold tracking-wider uppercase group-hover:text-[#F3E7D3] transition-colors">
                      Abrir en Google Maps
                    </p>
                    <ExternalLink size={14} className="text-[#C5A880] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="font-serif-display text-xs sm:text-sm text-[#E6EBF5]/85 italic mt-0.5 truncate">
                    Trazar ruta al Centro de Eventos Los Jardines
                  </p>
                </div>
              </div>

              {/* Passport Barcode / Coordinates Line */}
              <div className="mt-3 pt-2.5 border-t border-dashed border-[#C5A880]/25 flex items-center justify-between text-[9px] font-cinzel tracking-[0.18em] text-[#C5A880]/70 uppercase">
                <span>GPS: -17.3711°, -66.2506°</span>
                <span className="text-[#C5A880] font-semibold tracking-widest group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  VER RUTA →
                </span>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-script text-3xl sm:text-4xl text-cobalt mt-8"
        >
          ¡Esperamos verte allí!
        </motion.p>
      </div>
    </motion.section>
  );
}
