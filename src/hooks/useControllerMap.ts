import { ControllerMapContext } from "@/context/ControllerMap";
import { useContext } from "react";

export const useControllerMap = () => {
  const context = useContext(ControllerMapContext);

  if (!context) {
    throw new Error(
      "useControllerMap deve ser usado dentro de um ControllerMapProvider"
    );
  }

  return context;
};
