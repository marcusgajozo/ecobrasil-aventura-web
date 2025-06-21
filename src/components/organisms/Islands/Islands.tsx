import { NAME_ISLAND } from "@/lib/constants";
import { Amazonia } from "../Amazonia";
import { Caatinga } from "../Caatinga";
import { Cerrado } from "../Cerrado";
import { MataAtlantica } from "../MataAtlantica";
import { Pampa } from "../Pampa";
import { Pantanal } from "../Pantanal";

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
