import { Controls } from "@/lib/constants/keyboardMap";

import { useModalManagerStore } from "@/lib/stores/useModalManagerStore";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

export const GlobalKeyHandlers = () => {
  const [sub] = useKeyboardControls<Controls>();

  const handleOpenModal = useModalManagerStore(
    (state) => state.handleOpenModal
  );
  const handleCloseModal = useModalManagerStore(
    (state) => state.handleCloseModal
  );

  useEffect(() => {
    const unsubMap = sub(
      (state) => state.map,
      (pressed) => {
        if (pressed) {
          handleCloseModal();
          handleOpenModal("map-screen");
        }
      }
    );

    return () => {
      unsubMap();
    };
  }, [sub]);

  return null;
};
