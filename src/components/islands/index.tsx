import { IslandPantanal } from "@/components/pantanal/island-pantanal";
import { NAME_ISLAND } from "@/lib/constants/island";
import { IslandAmazonia } from "../amazonia/island-amazonia";
import { IslandCaatinga } from "../caatinga/island-caatinga";
import { IslandCerrado } from "../cerrado/island-cerrado";
import { IslandDome } from "../island-dome";
import { IslandMataAtlantica } from "../mata-atlantica/island-mata-atlantica";
import { ModelIslandSoil } from "../model-island-soil";
import { IslandPampa } from "../pampa/island-pampa";
import { TeleportPlatform } from "../teleport-platform";
import { QuestionBox } from "../question-box";

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
