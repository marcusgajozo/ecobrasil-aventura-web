import { KeyboardControlsEntry } from "@react-three/drei";

export const keyboardMap: KeyboardControlsEntry[] = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["ShiftLeft", "ShiftRight"] },
  { name: "map", keys: ["KeyM"] },
  { name: "rotateRight", keys: ["KeyE"] },
  { name: "rotateLeft", keys: ["KeyQ"] },
  { name: "action", keys: ["KeyF"] },
] as const;

export type Controls = (typeof keyboardMap)[number]["name"];
