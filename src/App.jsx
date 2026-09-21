import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import WeddingProgram from './components/WeddingProgram';
import OurLoveStory from './components/OurLoveStory';
import Family from './components/Family';
import TheDetails from './components/TheDetails';
import TheVenues from './components/TheVenues';
import TheGallery from './components/TheGallery';
import GentleReminder from './components/GentleReminder';
import TornPaperDivider from './components/TornPaperDivider';
import SectionOrnament from './components/SectionOrnament';
import MusicPlayer from './components/MusicPlayer';
import PassportCover from './components/PassportCover';

export default function App() {
  const [isPassportOpen, setIsPassportOpen] = useState(false);
  const musicPlayerRef = useRef(null);

  // Evitar scroll de fondo mientras el pasaporte está cerrado
  useEffect(() => {
    if (!isPassportOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPassportOpen]);

  const handleOpenInvitation = () => {
    // 1. Iniciar reproducción de forma sincrónica con el clic del usuario (100% compatible con móviles)
    if (musicPlayerRef.current) {
      musicPlayerRef.current.play();
    }
    // 2. Abrir la invitación
    setIsPassportOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#E8E0D4] relative">
      {/* Pasaporte de Bienvenida */}
      <AnimatePresence>
        {!isPassportOpen && (
          <PassportCover onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {/* Card container - mobile card centered on desktop */}
      <main className="max-w-lg mx-auto bg-ivory shadow-2xl relative overflow-hidden">
        {/* Hero */}
        <Hero />

        {/* Subtle deckle paper transition from hero to countdown */}
        <TornPaperDivider color="#FDFBF7" direction="down" className="relative -mt-1 z-30" />

        {/* Countdown */}
        <div id="countdown" className="bg-ivory px-4">
          <Countdown />
        </div>

        {/* Wedding Program */}
        <WeddingProgram />

        {/* Elegant separator */}
        <SectionOrnament />

        {/* Our Love Story */}
        <OurLoveStory />

        {/* Family - Navy Deckle Entourage Section */}
        <Family />

        {/* The Details */}
        <TheDetails />

        {/* The Venues (includes Cochabamba Map & Los Jardines) */}
        <TheVenues />

        {/* Elegant separator */}
        <SectionOrnament />

        {/* Gallery */}
        <TheGallery />

        {/* Gentle Reminder & Footer */}
        <GentleReminder />

        {/* Music Player */}
        <MusicPlayer ref={musicPlayerRef} isOpened={isPassportOpen} />
      </main>
    </div>
  );
}
