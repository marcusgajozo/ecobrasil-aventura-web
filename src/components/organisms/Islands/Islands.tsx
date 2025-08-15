import { NAME_ISLAND } from "@/lib/constants/island";
import { Amazonia } from "../Amazonia";
import { Caatinga } from "../Caatinga";
import { Cerrado } from "../Cerrado";
import { MataAtlantica } from "../MataAtlantica";
import { PampaIsland } from "../PampaIsland/PampaIsland";
import { Pantanal } from "../Pantanal";
import { TeleportPlatform } from "@/components/atoms/TeleportPlatform";
import { IslandDome } from "@/components/IslandDome/IslandDome";

type NameIsland = (typeof NAME_ISLAND)[number];

const maps: Record<NameIsland, () => JSX.Element> = {
  pantanal: Pantanal,
  "mata-atlantica": MataAtlantica,
  amazonia: Amazonia,
  caatinga: Caatinga,
  cerrado: Cerrado,
  pampa: PampaIsland,
};

export const Islands = () => {
  return Object.keys(maps).map((key) => {
    const Map = maps[key as NameIsland];
    return (
      <>
        <TeleportPlatform nameMap={key as NameIsland} />
        <IslandDome islandName={key as NameIsland} />
        <Map key={key} />
      </>
    );
  });
};
