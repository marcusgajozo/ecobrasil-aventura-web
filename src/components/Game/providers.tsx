import { ControllerMapProvider } from "@/context/ControllerMap";
import { ReactNode } from "react";

export const GameProviders = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return <ControllerMapProvider>{children}</ControllerMapProvider>;
};
