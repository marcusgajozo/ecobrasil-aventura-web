import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import backgroundAudioSrc from "@audios/background-audio.mp3";

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

  useEffect(() => {
    const audio = new Audio(backgroundAudioSrc);
    audio.loop = true;
    audio.volume = 0.02;
    backgroundAudioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleBackgroundAudio = useCallback(() => {
    if (!backgroundAudioRef.current) return;

    if (isPaused) {
      backgroundAudioRef.current.play();
    } else {
      backgroundAudioRef.current.pause();
    }

    setIsPaused((prev) => !prev);
  }, [isPaused]);

  const value = { isPaused, toggleBackgroundAudio };

  return (
    <AudioProviderContext.Provider value={value}>
      {children}
    </AudioProviderContext.Provider>
  );
};
