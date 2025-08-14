import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { BigIsland } from "../../atoms/BigIsland";
import { QuestionBox } from "../../atoms/QuestionBox/QuestionBox";
import { TeleportPlatform } from "../../atoms/TeleportPlatform";

export const Caatinga = () => {
  const { handlePositionRelative, positionIsland, saved } = useBuildIsland({
    nameIsland: "caatinga",
  });

  return (
    <>
      <TeleportPlatform nameMap="caatinga" />
      {!saved && (
        <QuestionBox position={handlePositionRelative({ x: -8, y: 8, z: 7 })} />
      )}
      <BigIsland color="#CB7103" positionMap={positionIsland} />
    </>
  );
};
