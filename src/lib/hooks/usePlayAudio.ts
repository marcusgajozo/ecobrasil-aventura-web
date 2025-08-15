import { useCallback, useRef, useEffect } from "react";

export const usePlayAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = useCallback((audioSrc: string, volume = 1.0) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(audioSrc);
    audio.volume = volume;
    audio.play().catch((error) => {
      console.error(`Erro ao tocar o áudio: ${audioSrc}`, error);
    });

    audioRef.current = audio;
  }, []);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  }, []);

  useEffect(() => {
    const cleanup = () => {
      stopAudio();
    };
    return cleanup;
  }, [stopAudio]);

  return { playAudio, stopAudio };
};
