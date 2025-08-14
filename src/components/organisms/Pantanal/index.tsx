import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { BigIsland } from "../../atoms/BigIsland";
import { QuestionBox } from "../../atoms/QuestionBox/QuestionBox";
import { TeleportPlatform } from "../../atoms/TeleportPlatform";

export const Pantanal = () => {
  const { handlePositionRelative, positionIsland, savedIsland } =
    useBuildIsland({
      nameIsland: "pantanal",
    });

  return (
    <>
      <TeleportPlatform nameMap="pantanal" />
      {!savedIsland && (
        <QuestionBox position={handlePositionRelative({ x: -8, y: 8, z: 7 })} />
      )}
      <BigIsland color="#546F08" positionMap={positionIsland} />
    </>
  );
};
