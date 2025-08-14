import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { BigIsland } from "../../atoms/BigIsland";
import { QuestionBox } from "../../atoms/QuestionBox/QuestionBox";
import { TeleportPlatform } from "../../atoms/TeleportPlatform";

export const MataAtlantica = () => {
  const { handlePositionRelative, positionIsland, saved } = useBuildIsland({
    nameIsland: "mata-atlantica",
  });

  return (
    <>
      <TeleportPlatform nameMap="mata-atlantica" />
      {!saved && (
        <QuestionBox position={handlePositionRelative({ x: -8, y: 8, z: 7 })} />
      )}
      <BigIsland color="#3B6605" positionMap={positionIsland} />
    </>
  );
};
