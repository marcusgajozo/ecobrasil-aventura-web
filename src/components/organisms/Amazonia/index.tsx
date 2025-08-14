import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { BigIsland } from "../../atoms/BigIsland";
import { QuestionBox } from "../../atoms/QuestionBox/QuestionBox";
import { TeleportPlatform } from "../../atoms/TeleportPlatform";

export const Amazonia = () => {
  const { handlePositionRelative, positionIsland, savedIsland } =
    useBuildIsland({
      nameIsland: "amazonia",
    });

  return (
    <>
      <TeleportPlatform nameMap="amazonia" />
      {!savedIsland && (
        <QuestionBox position={handlePositionRelative({ x: -8, y: 8, z: 7 })} />
      )}
      <BigIsland color="#72922B" positionMap={positionIsland} />
    </>
  );
};
