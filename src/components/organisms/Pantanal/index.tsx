import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { BigIsland } from "../../atoms/BigIsland";
import { QuestionBox } from "../../atoms/QuestionBox";
import { TeleportPlatform } from "../../atoms/TeleportPlatform";

export const Pantanal = () => {
  const { handlePositionRelative, positionIsland, saved } = useBuildIsland({
    nameIsland: "pantanal",
  });

  return (
    <>
      <TeleportPlatform
        positionPlatformA={handlePositionRelative({ x: -12, y: 6, z: 1 })}
        positionPlatformB={handlePositionRelative({ x: -12, y: 6, z: -8 })}
      />
      {!saved && (
        <QuestionBox position={handlePositionRelative({ x: -8, y: 8, z: 7 })} />
      )}
      <BigIsland color="#546F08" positionMap={positionIsland} />
    </>
  );
};
