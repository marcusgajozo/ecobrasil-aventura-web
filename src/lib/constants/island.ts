import amazoniaPng from "@images/amazonia/amazonia.png";
import caatingaPng from "@images/caatinga/caatinga.png";
import cerradoPng from "@images/cerrado/cerrado.png";
import mataAtlanticaPng from "@images/mata-atlantica/mata-atlantica.png";
import pampaPng from "@images/pampa/pampa.png";
import pantanalPng from "@images/pantanal/pantanal.png";
import { Vector3Like } from "three";

export const NAME_ISLAND = [
  "amazonia",
  "pantanal",
  "caatinga",
  "cerrado",
  "mata-atlantica",
  "pampa",
] as const;

export const POSITIONS_ISLAND_DATA: Record<
  (typeof NAME_ISLAND)[number],
  Vector3Like
> = {
  amazonia: { x: 0, y: 0, z: 0 },
  pantanal: { x: 80, y: 0, z: -30 },
  caatinga: { x: 50, y: 0, z: 80 },
  cerrado: { x: 60, y: 0, z: 30 },
  "mata-atlantica": { x: 100, y: 0, z: 25 },
  pampa: { x: -23, y: 0, z: -70 },
};

export const SOIL_COLOR_ISLAND: Record<(typeof NAME_ISLAND)[number], string> = {
  amazonia: "#637F23",
  pantanal: "#557008",
  caatinga: "#D6C94C",
  cerrado: "#AFAF4D",
  "mata-atlantica": "#4E8B31",
  pampa: "#40a52e",
};

export const NAME_ISLAND_FORMATED: Record<
  (typeof NAME_ISLAND)[number],
  string
> = {
  "mata-atlantica": "Mata Atlântica",
  pantanal: "Pantanal",
  caatinga: "Caatinga",
  cerrado: "Cerrado",
  amazonia: "Amazônia",
  pampa: "Pampa",
};

export const IMG_ISLAND: Record<(typeof NAME_ISLAND)[number], string> = {
  "mata-atlantica": mataAtlanticaPng,
  pantanal: pantanalPng,
  caatinga: caatingaPng,
  cerrado: cerradoPng,
  amazonia: amazoniaPng,
  pampa: pampaPng,
};
