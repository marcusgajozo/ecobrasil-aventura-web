import { IslandPantanal } from "@/components/pantanal/IslandPantanal";
import { NAME_ISLAND } from "@/lib/constants/island";
import { IslandAmazonia } from "./amazonia/IslandAmazonia";
import { IslandCaatinga } from "./caatinga/IslandCaatinga";
import { IslandCerrado } from "./cerrado/IslandCerrado";
import { IslandDome } from "./IslandDome";
import { IslandMataAtlantica } from "./mata-atlantica/IslandMataAtlantica";
import { ModelIslandSoil } from "./ModelIslandSoil";
import { IslandPampa } from "./pampa/IslandPampa";
import { QuestionBox } from "./QuestionBox/QuestionBox";
import { TeleportPlatform } from "./TeleportPlatform";

type NameIsland = (typeof NAME_ISLAND)[number];

const maps: Record<NameIsland, () => JSX.Element> = {
  pantanal: IslandPantanal,
  "mata-atlantica": IslandMataAtlantica,
  amazonia: IslandAmazonia,
  caatinga: IslandCaatinga,
  cerrado: IslandCerrado,
  pampa: IslandPampa,
};

export const Islands = () => {
  return NAME_ISLAND.map((islandName) => {
    const IslandElements = maps[islandName];

    return (
      <>
        <TeleportPlatform nameMap={islandName} />
        <QuestionBox islandName={islandName} />
        <IslandElements />
        <IslandDome islandName={islandName} />
        <ModelIslandSoil islandName={islandName} />
      </>
    );
  });
};
