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
  pantanal: new Vector3(18, 0, -4),
  caatinga: new Vector3(3, 0, 15),
  cerrado: new Vector3(3, 0, -17),
  "mata-atlantica": new Vector3(3, 0, -17),
  pampa: new Vector3(3, 0, -17),
};
