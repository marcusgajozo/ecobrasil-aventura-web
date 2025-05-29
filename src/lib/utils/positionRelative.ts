import { Vector3 } from "three";

export const positionRelative = ({
  newPosition,
  position,
}: {
  position: Vector3;
  newPosition: Vector3;
}) => {
  return new Vector3(
    position.x + newPosition.x,
    position.y + newPosition.y,
    position.z + newPosition.z
  );
};
