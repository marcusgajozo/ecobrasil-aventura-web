import { Vector3 } from "three";
import { NAME_ISLAND, POSITIONS_ISLAND_DATA } from "./island";
import { calculateWorldPosition } from "../utils/calculateWorldPosition";

type DestinationIsland = {
  name: (typeof NAME_ISLAND)[number];
  teleportPlatform: "A" | "B";
};

type TeleportPlatform = {
  A: {
    position: Vector3;
    destinationIsland: DestinationIsland;
  };

  B: {
    position: Vector3;
    destinationIsland: DestinationIsland;
  };
};

export const TELEPORT_PLATFORM: Record<
  (typeof NAME_ISLAND)[number],
  TeleportPlatform
> = {
  amazonia: {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.amazonia,
        relativeOffset: { x: -12, y: 6, z: -8 },
      }),
      destinationIsland: {
        name: "pantanal",
        teleportPlatform: "A",
      },
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.amazonia,
        relativeOffset: { x: -12, y: 6, z: 1 },
      }),
      destinationIsland: {
        name: "pampa",
        teleportPlatform: "B",
      },
    },
  },
  pantanal: {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.pantanal,
        relativeOffset: { x: -12, y: 6, z: -8 },
      }),
      destinationIsland: {
        name: "amazonia",
        teleportPlatform: "A",
      },
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.pantanal,
        relativeOffset: { x: -12, y: 6, z: 1 },
      }),
      destinationIsland: {
        name: "caatinga",
        teleportPlatform: "B",
      },
    },
  },
  caatinga: {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.caatinga,
        relativeOffset: { x: -12, y: 6, z: -8 },
      }),
      destinationIsland: {
        name: "cerrado",
        teleportPlatform: "A",
      },
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.caatinga,
        relativeOffset: { x: -12, y: 6, z: 1 },
      }),
      destinationIsland: {
        name: "pantanal",
        teleportPlatform: "B",
      },
    },
  },
  cerrado: {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.cerrado,
        relativeOffset: { x: -12, y: 6, z: -8 },
      }),
      destinationIsland: {
        name: "caatinga",
        teleportPlatform: "A",
      },
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.cerrado,
        relativeOffset: { x: -12, y: 6, z: 1 },
      }),
      destinationIsland: {
        name: "mata-atlantica",
        teleportPlatform: "B",
      },
    },
  },
  "mata-atlantica": {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA["mata-atlantica"],
        relativeOffset: { x: -12, y: 6, z: -8 },
      }),
      destinationIsland: {
        name: "pampa",
        teleportPlatform: "A",
      },
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA["mata-atlantica"],
        relativeOffset: { x: -12, y: 6, z: 1 },
      }),
      destinationIsland: {
        name: "cerrado",
        teleportPlatform: "B",
      },
    },
  },
  pampa: {
    A: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.pampa,
        relativeOffset: { x: -12, y: 6, z: -8 },
      }),
      destinationIsland: {
        name: "mata-atlantica",
        teleportPlatform: "A",
      },
    },
    B: {
      position: calculateWorldPosition({
        basePosition: POSITIONS_ISLAND_DATA.pampa,
        relativeOffset: { x: -12, y: 6, z: 1 },
      }),
      destinationIsland: {
        name: "amazonia",
        teleportPlatform: "B",
      },
    },
  },
};
