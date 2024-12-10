import { RapierRigidBody } from "@react-three/rapier";
import { createContext, ReactNode, useRef } from "react";

type CharacterTeleportContextType = {
  character: React.RefObject<RapierRigidBody>;
};

export const CharacterTeleportContext = createContext(
  {} as CharacterTeleportContextType
);

export const CharacterTeleportProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const character = useRef<RapierRigidBody>(null);
  return (
    <CharacterTeleportContext.Provider value={{ character }}>
      {children}
    </CharacterTeleportContext.Provider>
  );
};
