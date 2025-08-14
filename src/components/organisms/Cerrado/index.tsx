import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { BigIsland } from "../../atoms/BigIsland";
import { QuestionBox } from "../../atoms/QuestionBox";
import { TeleportPlatform } from "../../atoms/TeleportPlatform";

export const Cerrado = () => {
  const { handlePositionRelative, positionIsland, saved } = useBuildIsland({
    nameIsland: "cerrado",
  });

  return (
    <>
      <TeleportPlatform nameMap="cerrado" />
      {!saved && (
        <QuestionBox position={handlePositionRelative({ x: -8, y: 8, z: 7 })} />
      )}
      <BigIsland color="#85A649" positionMap={positionIsland} />
    </>
  );
};
