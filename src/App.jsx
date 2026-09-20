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

export default function App() {
  return (
    <div className="min-h-screen bg-[#E8E0D4]">
      {/* Card container - mobile card centered on desktop */}
      <div className="max-w-lg mx-auto bg-ivory shadow-2xl relative overflow-hidden">
        {/* Hero */}
        <Hero />

        {/* Subtle deckle paper transition from hero to countdown */}
        <TornPaperDivider color="#FDFBF7" direction="down" className="relative -mt-1 z-30" />

        {/* Countdown */}
        <div className="bg-ivory px-4">
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
      </div>
    </div>
  );
}
