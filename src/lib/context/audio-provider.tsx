import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import backgroundAudioSrc from "@audios/background-audio2.mp3";

type AudioProviderType = {
  isPaused: boolean;
  toggleBackgroundAudio: () => void;
};

export const AudioProviderContext = createContext<
  AudioProviderType | undefined
>(undefined);

type AudioProviderProps = {
  children: ReactNode;
};

export const AudioProvider = ({ children }: AudioProviderProps) => {
  const [isPaused, setIsPaused] = useState(true);
  const backgroundAudioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedOnce = useRef(false);

  useEffect(() => {
    const audio = new Audio(backgroundAudioSrc);
    audio.loop = true;
    audio.volume = 0.1;
    backgroundAudioRef.current = audio;

    const handleFirstUserInteraction = async () => {
      if (!hasStartedOnce.current) {
        try {
          await audio.play();
          hasStartedOnce.current = true;
          setIsPaused(false);
        } catch (error) {
          console.log("Autoplay prevented:", error);
        }
      }
    };

    const events = ["click", "keydown", "touchstart"];
    events.forEach((event) => {
      document.addEventListener(event, handleFirstUserInteraction, {
        once: true,
      });
    });

    return () => {
      audio.pause();
      audio.src = "";
      events.forEach((event) => {
        document.removeEventListener(event, handleFirstUserInteraction);
      });
    };
  }, []);

  const toggleBackgroundAudio = useCallback(async () => {
    if (!backgroundAudioRef.current) return;

    try {
      if (isPaused) {
        await backgroundAudioRef.current.play();
        hasStartedOnce.current = true;
        setIsPaused(false);
      } else {
        backgroundAudioRef.current.pause();
        setIsPaused(true);
      }
    } catch (error) {
      console.log("Error toggling audio:", error);
      setIsPaused(true);
    }
  }, [isPaused]);

  const value = { isPaused, toggleBackgroundAudio };

  return (
    <AudioProviderContext.Provider value={value}>
      {children}
    </AudioProviderContext.Provider>
  );
};
