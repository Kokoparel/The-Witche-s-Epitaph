// src/components/AudioPlayer.jsx
import { useState, useRef, useEffect } from "react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Autoplay pas pertama kali user klik apapun di halaman
  useEffect(() => {
    const handleFirstInteraction = () => {
      audioRef.current.play();
      setIsPlaying(true);
      window.removeEventListener("click", handleFirstInteraction);
    };
    window.addEventListener("click", handleFirstInteraction);
    return () => window.removeEventListener("click", handleFirstInteraction);
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation(); // biar gak trigger event lain
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Audio element, loop biar terus putar */}
      <audio ref={audioRef} src="/01_titr.ogg" loop />

      {/* Tombol play/pause floating */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50
                   w-12 h-12 rounded-full
                   bg-stone-900 border border-amber-700/50
                   text-amber-400 text-xl
                   flex items-center justify-center
                   shadow-[0_0_15px_rgba(120,53,15,0.4)]
                   hover:border-amber-500 hover:text-amber-300
                   hover:shadow-[0_0_20px_rgba(217,119,6,0.5)]
                   transition-all duration-300"
        title={isPlaying ? "Pause BGM" : "Play BGM"}
      >
        {isPlaying ? "⏸" : "▶"}
      </button>
    </>
  );
};

export default AudioPlayer;