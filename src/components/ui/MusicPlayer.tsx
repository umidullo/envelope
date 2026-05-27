import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import musicFile from "../../assets/music.mp3";
import "./MusicPlayer.css";

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playMusic = async () => {
      if (audioRef.current && audioRef.current.paused) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log(
            "Autoplay blocked by browser. Awaiting user interaction.",
          );
        }
      }
    };

    playMusic();

    const handleFirstInteraction = (e: Event) => {
      if (e.target && (e.target as Element).closest?.(".music-player-btn")) {
        const events = ["click", "touchstart", "keydown"];
        events.forEach((ev) =>
          document.removeEventListener(
            ev,
            handleFirstInteraction as EventListener,
            { capture: true },
          ),
        );
        return;
      }

      playMusic();
      const events = ["click", "touchstart", "keydown"];
      events.forEach((ev) =>
        document.removeEventListener(
          ev,
          handleFirstInteraction as EventListener,
          { capture: true },
        ),
      );
    };

    const loadInteractionEvents = () => {
      const events = ["click", "touchstart", "keydown"];
      events.forEach((ev) =>
        document.addEventListener(ev, handleFirstInteraction as EventListener, {
          capture: true,
          passive: true,
        }),
      );
    };

    loadInteractionEvents();

    return () => {
      const events = ["click", "touchstart", "keydown"];
      events.forEach((ev) =>
        document.removeEventListener(
          ev,
          handleFirstInteraction as EventListener,
          { capture: true },
        ),
      );
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={musicFile}
        loop
        autoPlay
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        className={`music-player-btn ${isPlaying ? "playing" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        aria-label="Toggle background music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </>
  );
};
