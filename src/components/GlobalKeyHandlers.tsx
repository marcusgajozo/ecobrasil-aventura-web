import { Controls } from "@/lib/constants/keyboardMap"; // Ajuste o caminho
import { useControllerMap } from "@/lib/hooks/useControllerMap";
import { useModalManagerStore } from "@/lib/stores/useModalManagerStore";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

export const GlobalKeyHandlers = () => {
  const [sub] = useKeyboardControls<Controls>();

  const { setOpenMap } = useControllerMap();
  const handleCloseModal = useModalManagerStore(
    (state) => state.handleCloseModal
  );

  useEffect(() => {
    const unsubMap = sub(
      (state) => state.map,
      (pressed) => {
        if (pressed) {
          setOpenMap((prev) => !prev);
          handleCloseModal();
        }
      }
    );

    return () => {
      unsubMap();
    };
  }, [sub, setOpenMap]);

  return null;
};
