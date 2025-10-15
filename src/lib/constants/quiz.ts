import { Vector3 } from "three";
import { calculateWorldPosition } from "../utils/calculate-world-position";
import { NAME_ISLAND, POSITIONS_ISLAND_DATA } from "./island";

export const QUESTION_BOX_POSITION: Record<
  (typeof NAME_ISLAND)[number],
  Vector3
> = {
  "mata-atlantica": calculateWorldPosition({
    basePosition: POSITIONS_ISLAND_DATA["mata-atlantica"],
    relativeOffset: { x: -8, y: 8, z: 7 },
  }),
  cerrado: calculateWorldPosition({
    basePosition: POSITIONS_ISLAND_DATA["cerrado"],
    relativeOffset: { x: -8, y: 8, z: 7 },
  }),
  pantanal: calculateWorldPosition({
    basePosition: POSITIONS_ISLAND_DATA["pantanal"],
    relativeOffset: { x: -8, y: 8, z: 7 },
  }),
  amazonia: calculateWorldPosition({
    basePosition: POSITIONS_ISLAND_DATA["amazonia"],
    relativeOffset: { x: -8, y: 8, z: 7 },
  }),
  caatinga: calculateWorldPosition({
    basePosition: POSITIONS_ISLAND_DATA["caatinga"],
    relativeOffset: { x: -8, y: 8, z: 7 },
  }),
  pampa: calculateWorldPosition({
    basePosition: POSITIONS_ISLAND_DATA["pampa"],
    relativeOffset: { x: -8, y: 8, z: 7 },
  }),
};
