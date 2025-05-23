import { KeyboardControlsEntry } from "@react-three/drei";

export const keyboardMap: KeyboardControlsEntry[] = [
  { name: "forward", keys: ["ArrowUp", "w"] },
  { name: "backward", keys: ["ArrowDown", "s"] },
  { name: "left", keys: ["ArrowLeft", "a"] },
  { name: "right", keys: ["ArrowRight", "d"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
  { name: "map", keys: ["m"] },
  { name: "rotateRight", keys: ["e"] },
  { name: "rotateLeft", keys: ["q"] },
  { name: "action", keys: ["f"] },
] as const;

export type Controls = (typeof keyboardMap)[number]["name"];
