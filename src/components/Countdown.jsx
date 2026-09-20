import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WEDDING_DATE = new Date('2026-11-15T14:00:00');

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = WEDDING_DATE - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center gap-3 sm:gap-5 py-8"
    >
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm border border-cobalt/10 rounded-lg flex items-center justify-center shadow-sm">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-cobalt">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <p className="font-sans text-[10px] sm:text-xs text-cobalt-dark/60 mt-2 tracking-wider uppercase">
            {unit.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}
