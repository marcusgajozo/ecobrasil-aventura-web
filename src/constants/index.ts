import { Vector3 } from "three";

export const NAME_MAPS = [
  "amazonia",
  "pantanal",
  "caatinga",
  "cerrado",
  "mata-atlantica",
  "pampa",
] as const;

export const POSITIONS_MAPS: Record<(typeof NAME_MAPS)[number], Vector3> = {
  amazonia: new Vector3(0, 0, 0),
  pantanal: new Vector3(80, 0, -30),
  caatinga: new Vector3(50, 0, 80),
  cerrado: new Vector3(60, 0, 30),
  "mata-atlantica": new Vector3(100, 0, 25),
  pampa: new Vector3(-23, 0, -70),
};

export const NAME_MAPS_FORMATED: Record<(typeof NAME_MAPS)[number], string> = {
  "mata-atlantica": "Mata Atlântica",
  pantanal: "Pantanal",
  caatinga: "Caatinga",
  cerrado: "Cerrado",
  amazonia: "Amazônia",
  pampa: "Pampa",
};

export const IMG_MAPS: Record<(typeof NAME_MAPS)[number], string> = {
  "mata-atlantica": "/mata-atlantica.png",
  pantanal: "/ilha.svg",
  caatinga: "/caatinga.png",
  cerrado: "/cerrado.png",
  amazonia: "/ilha.svg",
  pampa: "/pampa.png",
};
