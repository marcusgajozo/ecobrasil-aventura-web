import { Controls } from "@/lib/constants/keyboardMap";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect, useState } from "react";

type useCharacterObjectInteractionProps = {
  control: Controls;
  action: () => void;
};

export const useCharacterObjectInteraction = ({
  control,
  action,
}: useCharacterObjectInteractionProps) => {
  const [isClose, setIsClose] = useState(false);
  const [sub] = useKeyboardControls<Controls>();

  useEffect(() => {
    const unsubscribe = sub(
      (state) => state[control],
      (press) => {
        if (press && isClose) {
          action();
        }
      }
    );
    return unsubscribe;
  }, [sub, control, isClose, action]);

  return {
    isClose,
    setIsClose,
  };
};
