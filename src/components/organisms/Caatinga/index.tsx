import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { BigIsland } from "../../atoms/BigIsland";
import { QuestionBox } from "../../atoms/QuestionBox/QuestionBox";
import { TeleportPlatform } from "../../atoms/TeleportPlatform";

export const Caatinga = () => {
  const { handlePositionRelative, positionIsland, savedIsland } =
    useBuildIsland({
      nameIsland: "caatinga",
    });

  return (
    <>
      <TeleportPlatform nameMap="caatinga" />
      {!savedIsland && (
        <QuestionBox position={handlePositionRelative({ x: -8, y: 8, z: 7 })} />
      )}
      <BigIsland color="#CB7103" positionMap={positionIsland} />
    </>
  );
};
