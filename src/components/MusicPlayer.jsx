import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Music, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const MusicPlayer = forwardRef(function MusicPlayer({ isOpened }, ref) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  // El reproductor visual aparece 10 segundos después de abrir la invitación
  useEffect(() => {
    if (isOpened) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpened]);

  // Exponer métodos para control externo (ej. desde el botón del Pasaporte)
  useImperativeHandle(ref, () => ({
    play: () => {
      const audio = audioRef.current;
      if (audio) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log('Error al reproducir audio:', err);
          });
      }
    },
    pause: () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        setIsPlaying(false);
      }
    },
    togglePlay: () => {
      togglePlay();
    },
    isPlaying
  }));

  // Formato mm:ss
  const formatTime = (time) => {
    if (isNaN(time) || time === null) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    // Intentar reproducir si el navegador lo permite
    const attemptPlay = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            removeListeners();
          })
          .catch(() => {
            // Autoplay bloqueado por políticas de navegador hasta interacción válida
          });
      }
    };

    const handleUserInteraction = () => {
      if (audio.paused) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              removeListeners();
            })
            .catch(() => {});
        }
      } else {
        setIsPlaying(true);
        removeListeners();
      }
    };

    const removeListeners = () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchend', handleUserInteraction);
      document.removeEventListener('pointerup', handleUserInteraction);
    };

    attemptPlay();

    document.addEventListener('click', handleUserInteraction, { passive: true });
    document.addEventListener('touchend', handleUserInteraction, { passive: true });
    document.addEventListener('pointerup', handleUserInteraction, { passive: true });

    return () => {
      removeListeners();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error('Error al reproducir audio:', err);
          });
      }
    }
  };

  // Adelantar / retroceder en la barra de progreso
  const handleSeek = (e) => {
    const audio = audioRef.current;
    const bar = progressBarRef.current;
    if (!audio || !bar || !duration) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPercent = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = newPercent * duration;

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const audioSrc = `${import.meta.env.BASE_URL}musica/musicaF.mp3`;

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        playsInline
      />

      {/* El reproductor aparece suavemente tras 5 segundos de abrir la invitación */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-sm"
          >
            <AnimatePresence mode="wait">
              {!isMinimized ? (
                /* REPRODUCTOR EXPANDIDO */
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="bg-white/95 backdrop-blur-md border border-cobalt/20 rounded-2xl shadow-xl shadow-cobalt/15 p-3 sm:p-3.5"
                >
                  {/* Mensaje sutil si aún no ha comenzado la música */}
                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      className="cursor-pointer mb-2 px-2.5 py-1 bg-cobalt/10 hover:bg-cobalt/15 rounded-lg flex items-center justify-between transition-colors"
                    >
                      <span className="text-[11px] font-sans font-medium text-cobalt flex items-center gap-1.5">
                        <Sparkles size={12} className="text-cobalt animate-pulse" />
                        Toca aquí para activar la música
                      </span>
                      <span className="text-[10px] uppercase font-bold text-cobalt bg-white/80 px-1.5 py-0.5 rounded shadow-xs">
                        Tocar
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    {/* Disco de vinilo animado */}
                    <div
                      onClick={togglePlay}
                      className="relative cursor-pointer shrink-0 group"
                      title={isPlaying ? 'Pausar' : 'Reproducir'}
                    >
                      <div
                        className={`w-11 h-11 rounded-full bg-linear-to-tr from-slate-900 via-cobalt-dark to-slate-800 flex items-center justify-center shadow-md border-2 border-amber-100/50 ${
                          isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full bg-cobalt flex items-center justify-center border border-white/40">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                        {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                      </div>
                    </div>

                    {/* Información y ecualizador */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <div className="min-w-0">
                          <p className="font-cinzel text-xs font-semibold text-cobalt-dark truncate leading-tight">
                            Nuestra Canción
                          </p>
                          <p className="font-script text-sm text-cobalt truncate leading-none">
                            William & Rosa
                          </p>
                        </div>

                        {/* Ecualizador animado & botón minimizar */}
                        <div className="flex items-center gap-2 shrink-0">
                          {isPlaying && (
                            <div className="flex items-end gap-0.5 h-3.5 px-1">
                              <span className="w-0.5 bg-cobalt rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
                              <span className="w-0.5 bg-cobalt-light rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.2s] h-2.5" />
                              <span className="w-0.5 bg-cobalt rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.4s] h-3" />
                              <span className="w-0.5 bg-cobalt-light rounded-full animate-[pulse_0.7s_ease-in-out_infinite_0.1s] h-2" />
                            </div>
                          )}

                          <button
                            onClick={() => setIsMinimized(true)}
                            className="text-cobalt-dark/40 hover:text-cobalt p-1 rounded-full hover:bg-cobalt/5 transition-colors"
                            title="Minimizar reproductor"
                          >
                            <ChevronDown size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Barra de progreso de la canción */}
                      <div
                        ref={progressBarRef}
                        onClick={handleSeek}
                        className="relative h-1.5 bg-cobalt/10 hover:h-2 rounded-full cursor-pointer transition-all group overflow-hidden"
                        title="Adelantar / Retroceder"
                      >
                        <div
                          className="h-full bg-linear-to-r from-cobalt to-cobalt-light rounded-full transition-all duration-100"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>

                      {/* Tiempos de reproducción */}
                      <div className="flex justify-between items-center text-[10px] text-cobalt-dark/60 font-mono mt-1">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>

                    {/* Botón principal Play/Pause */}
                    <button
                      onClick={togglePlay}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 ${
                        isPlaying
                          ? 'bg-cobalt text-white hover:bg-cobalt-dark'
                          : 'bg-cobalt text-white animate-pulse'
                      }`}
                      aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
                    >
                      {isPlaying ? (
                        <Pause size={18} fill="currentColor" />
                      ) : (
                        <Play size={18} fill="currentColor" className="ml-0.5" />
                      )}
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* REPRODUCTOR MINIMIZADO (Botón Flotante Reducido) */
                <motion.div
                  key="minimized"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex justify-end"
                >
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-cobalt/20 rounded-full shadow-xl shadow-cobalt/15 pl-3 pr-1.5 py-1.5">
                    <button
                      onClick={togglePlay}
                      className="flex items-center gap-2 text-left"
                    >
                      <div
                        className={`w-7 h-7 rounded-full bg-cobalt flex items-center justify-center text-white shrink-0 ${
                          isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''
                        }`}
                      >
                        <Music size={14} />
                      </div>
                      <div className="pr-1">
                        <p className="font-cinzel text-[10px] font-semibold text-cobalt-dark leading-none">
                          {isPlaying ? 'Sonando...' : 'Tocar música'}
                        </p>
                        <p className="font-mono text-[9px] text-cobalt-dark/60">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => setIsMinimized(false)}
                      className="w-7 h-7 rounded-full text-cobalt hover:bg-cobalt/10 flex items-center justify-center transition-colors"
                      title="Expandir reproductor"
                    >
                      <ChevronUp size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default MusicPlayer;
