import { NAME_ISLAND } from "@/lib/constants";
import { Amazonia } from "./components/Amazonia";
import { Caatinga } from "./components/Caatinga";
import { Cerrado } from "./components/Cerrado";
import { MataAtlantica } from "./components/MataAtlantica";
import { Pampa } from "./components/Pampa";
import { Pantanal } from "./components/Pantanal";

type NameIsland = (typeof NAME_ISLAND)[number];

const maps: Record<NameIsland, () => JSX.Element> = {
  pantanal: Pantanal,
  "mata-atlantica": MataAtlantica,
  amazonia: Amazonia,
  caatinga: Caatinga,
  cerrado: Cerrado,
  pampa: Pampa,
};

export const Islands = () => {
  return (
    <>
      {Object.keys(maps).map((key) => {
        const Map = maps[key as NameIsland];
        return <Map key={key} />;
      })}
    </>
  );
};
