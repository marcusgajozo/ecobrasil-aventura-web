import { NAME_ISLAND, POSITIONS_ISLAND_DATA } from "@/lib/constants/island";
import { useManagerCharacterStore } from "@/lib/stores/useManagerCharacterStore";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import { calculateWorldPosition } from "@/lib/utils/calculateWorldPosition";
import { SpringValue } from "@react-spring/three";
import { useSpring } from "@react-spring/three";
import { createContext, useCallback } from "react";
import { Vector3 } from "three";

type TeleportCharacterContext = {
  animationTeleport: { scale: SpringValue<number> };
  handleTeleportCharacter: (
    nameMap: (typeof NAME_ISLAND)[number],
    positionTeleport?: Vector3
  ) => void;
};

export const TeleportCharacterContext =
  createContext<TeleportCharacterContext | null>(null);

type TeleportCharacterProviderProps = {
  children: React.ReactNode;
};

export const TeleportCharacterProvider = ({
  children,
}: TeleportCharacterProviderProps) => {
  const character = useManagerCharacterStore((state) => state.character);

  const handleVisitIsland = useManagerIslandStore(
    (state) => state.handleVisitIsland
  );
  const setCurrentIsland = useManagerIslandStore(
    (state) => state.setCurrentIsland
  );

  const [animationTeleport, api] = useSpring(() => ({
    scale: 1,
    config: { duration: 500 },
  }));

  const handleTeleportCharacter = useCallback(
    (nameMap: (typeof NAME_ISLAND)[number], positionTeleport?: Vector3) => {
      const position = calculateWorldPosition({
        basePosition: positionTeleport || POSITIONS_ISLAND_DATA[nameMap],
        relativeOffset: new Vector3(0, 2, 0),
      });

      console.log("Iniciando teleporte...");

      // Inicia a animação de encolher e define o que fazer quando ela terminar.
      api.start({
        scale: 0,
        onRest: (result) => {
          // 'onRest' é executado quando a animação de encolher termina.
          // Verificamos se a animação terminou com sucesso.
          if (result.finished) {
            console.log("Encolhimento completo. Teleportando...");

            // 1. Teleporta o corpo físico do personagem.
            if (character) character.setTranslation(position, true);

            // 2. Atualiza o estado global para mudar de ilha.
            // Isto irá causar uma re-renderização que, de outra forma, interromperia a animação.
            handleVisitIsland(nameMap);
            setCurrentIsland(nameMap);

            // 3. Usa um 'setTimeout' para iniciar a animação de crescer.
            // Isto garante que a chamada para 'api.start' acontece no próximo "tick" do JavaScript,
            // DEPOIS de o React ter terminado a sua re-renderização.
            setTimeout(() => {
              console.log("Crescendo...");
              api.start({ scale: 1 });
            }, 0);
          }
        },
      });
    },
    [api, character, handleVisitIsland, setCurrentIsland]
  );

  return (
    <TeleportCharacterContext.Provider
      value={{ handleTeleportCharacter, animationTeleport }}
    >
      {children}
    </TeleportCharacterContext.Provider>
  );
};
