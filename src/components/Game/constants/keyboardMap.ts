export enum Controls {
  forward = "forward",
  backward = "backward",
  left = "left",
  right = "right",
  jump = "jump",
  run = "run",
  map = "map",
  rotateRight = "rotateRight",
  rotateLeft = "rotateLeft",
  action = "action",
}

export const keyboardMap = [
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
];
