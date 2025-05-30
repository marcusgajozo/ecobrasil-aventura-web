import { Vector3, Vector3Like } from "three";

export const calculateWorldPosition = ({
  basePosition,
  relativeOffset,
}: {
  basePosition: Vector3 | Vector3Like;
  relativeOffset: Vector3 | Vector3Like;
}) => {
  return new Vector3().addVectors(basePosition, relativeOffset);
};
