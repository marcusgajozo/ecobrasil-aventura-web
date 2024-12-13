import { NAME_MAPS } from "@/constants";
import { Pantanal } from "./components/Pantanal";
import { MataAtlantica } from "./components/MataAtlantica";
import { Amazonia } from "./components/Amazonia";
import { Caatinga } from "./components/Caatinga";
import { Cerrado } from "./components/Cerrado";
import { Pampa } from "./components/Pampa";

const maps: Record<(typeof NAME_MAPS)[number], () => JSX.Element> = {
  pantanal: Pantanal,
  "mata-atlantica": MataAtlantica,
  amazonia: Amazonia,
  caatinga: Caatinga,
  cerrado: Cerrado,
  pampa: Pampa,
};

const Maps = () => {
  return (
    <>
      {Object.keys(maps).map((key) => {
        const Map = maps[key as (typeof NAME_MAPS)[number]];
        return <Map key={key} />;
      })}
    </>
  );
};

export default Maps;
