import { Controls } from "@/lib/constants/keyboardMap"; // Ajuste o caminho
import { useControllerMap } from "@/lib/hooks/useControllerMap";
import { useControllerQuiz } from "@/lib/hooks/useControllerQuiz";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

export const GlobalKeyHandlers = () => {
  const [sub] = useKeyboardControls<Controls>();

  const { setOpenMap } = useControllerMap();
  const { setOpenQuiz } = useControllerQuiz();

  useEffect(() => {
    const unsubMap = sub(
      (state) => state.map,
      (pressed) => {
        if (pressed) {
          setOpenMap((prev) => !prev);
          setOpenQuiz(false);
        }
      }
    );

    return () => {
      unsubMap();
    };
  }, [sub, setOpenMap, setOpenQuiz]);

  return null;
};
