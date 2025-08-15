import { useContext } from "react";
import { AudioProviderContext } from "../context/AudioProvider";

export const useAudio = () => {
  const context = useContext(AudioProviderContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
