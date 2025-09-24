import { NAME_ISLAND } from "@/lib/constants/island";
import { Amazonia } from "../Amazonia";
import { Caatinga } from "../Caatinga";
import { Cerrado } from "../Cerrado";
import { MataAtlantica } from "../MataAtlantica";
import { PampaIsland } from "../PampaIsland/PampaIsland";
import { TeleportPlatform } from "@/components/atoms/TeleportPlatform";
import { IslandDome } from "@/components/IslandDome/IslandDome";
import { IslandSoilModel } from "@/components/atoms/IslandSoil/IslandSoilModel";
import { QuestionBox } from "@/components/atoms/QuestionBox/QuestionBox";
import { IslandPantanal } from "@/components/pantanal/IslandPantanal";

type NameIsland = (typeof NAME_ISLAND)[number];

const maps: Record<NameIsland, () => JSX.Element> = {
  pantanal: IslandPantanal,
  "mata-atlantica": MataAtlantica,
  amazonia: Amazonia,
  caatinga: Caatinga,
  cerrado: Cerrado,
  pampa: PampaIsland,
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
        <IslandSoilModel islandName={islandName} />
      </>
    );
  });
};
