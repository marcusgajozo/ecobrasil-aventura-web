import { NAME_ISLAND } from "@/lib/constants/island";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import { useMemo } from "react";
import { SlidingNumberBasic } from "../SlidingNumberBasic/SlidingNumberBasic";

export const GameInfo = () => {
  const islandsInformation = useManagerIslandStore(state => state.islandsInformation)

  const numberIslandsSaved = useMemo(() => {
    const savedIslands = NAME_ISLAND.filter(island => islandsInformation[island].saved);
    return savedIslands.length;
  }, [islandsInformation]);

  const numberIslandsUnsaved = useMemo(() => {
    return Math.abs(numberIslandsSaved - NAME_ISLAND.length);
  }, [islandsInformation]);

  const numberIslandsTotal = NAME_ISLAND.length;

    return (
      <div className="font-primary">
        <div>
          EcoBrasil Aventura
        </div>
        <SlidingNumberBasic/>
        <div>
          Mapas totais: {numberIslandsTotal}
        </div>
        <div>
          Mapas salvos: {numberIslandsSaved}
        </div>
        <div>
          Mapas não salvos: {numberIslandsUnsaved}
        </div>
      </div>
    );
};
