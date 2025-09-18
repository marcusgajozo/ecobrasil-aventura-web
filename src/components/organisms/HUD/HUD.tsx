import { IMG_ISLAND } from "@/lib/constants/island";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import { CurrentIsland } from "./@components/CurrentIsland/CurrentIsland";
import { GameInfo } from "./@components/GameInfo/GameInfo";
import configSrc from "@images/config.svg";
import { Help } from "./@components/Help/Help";

export const HUD = () => {
  const currentIsland = useManagerIslandStore((state) => state.currentIsland);
  return (
    <div className="h-full w-full absolute top-0 left-0 z-99999">
      <div className="relative h-full w-full flex flex-col items-center justify-between">
        <div className="absolute top-3">
          <CurrentIsland />
        </div>
        <div className="w-40 absolute bottom-3 right-3">
          <img
            src={IMG_ISLAND[currentIsland]}
            alt={`ilustração da ilha ${currentIsland}`}
          />
          <div className="text-2xl text-white font-primary text-center">
            Aperte [M] para abrir o mapa
          </div>
        </div>
        <div className="w-20 absolute top-3 right-4 cursor-pointer">
          <img src={configSrc} alt={`ilustração da ilha ${currentIsland}`} />
        </div>
        <div className="absolute top-3 left-3">
          <GameInfo />
        </div>
        <div className="absolute bottom-3 left-3">
          <Help />
        </div>
      </div>
    </div>
  );
};
