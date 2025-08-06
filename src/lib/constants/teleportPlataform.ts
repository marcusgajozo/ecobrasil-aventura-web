import { Vector3 } from "three";
import { NAME_ISLAND, POSITIONS_ISLAND_DATA } from ".";
import { calculateWorldPosition } from "../utils/calculateWorldPosition";

type TeleportPlatformPosition = {
  A: {
    position: Vector3;
    island: (typeof NAME_ISLAND)[number];
  };

  B: {
    position: Vector3;
    island: (typeof NAME_ISLAND)[number];
  };
};

export const TELEPORT_PLATFORM: Record<
  (typeof NAME_ISLAND)[number],
  TeleportPlatformPosition
> = {
  amazonia: {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.amazonia,
        relativeOffset: { x: 0, y: 0, z: 0 },
      }),
      island: "pantanal",
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.amazonia,
        relativeOffset: { x: 0, y: 0, z: 0 },
      }),
      island: "pampa",
    },
  },
  pantanal: {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.pantanal,
        relativeOffset: { x: 0, y: 0, z: 0 },
      }),
      island: "amazonia",
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.pantanal,
        relativeOffset: { x: 0, y: 0, z: 0 },
      }),
      island: "caatinga",
    },
  },
  caatinga: {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.caatinga,
        relativeOffset: { x: 0, y: 0, z: 0 },
      }),
      island: "cerrado",
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.caatinga,
        relativeOffset: { x: 0, y: 0, z: 0 },
      }),
      island: "pantanal",
    },
  },
  cerrado: {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.cerrado,
        relativeOffset: { x: 0, y: 0, z: 0 },
      }),
      island: "caatinga",
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.cerrado,
        relativeOffset: { x: 0, y: 0, z: 0 },
      }),
      island: "mata-atlantica",
    },
  },
  "mata-atlantica": {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA["mata-atlantica"],
        relativeOffset: { x: 0, y: 0, z: 0 },
      }),
      island: "pampa",
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA["mata-atlantica"],
        relativeOffset: { x: 0, y: 0, z: 0 },
      }),
      island: "cerrado",
    },
  },
  pampa: {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.pampa,
        relativeOffset: { x: -12, y: 6, z: -8 },
      }),
      island: "mata-atlantica",
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.pampa,
        relativeOffset: { x: -12, y: 6, z: 1 },
      }),
      island: "amazonia",
    },
  },
};
