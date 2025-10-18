import { useManagerGameStore } from "./lib/stores/use-manager-game-store";
import { Game } from "./screens/game";
import { Introduction } from "./screens/introduction";

export const GameApp = () => {
  const isFirstAccess = useManagerGameStore((state) => state.isFirstAccess);
  return (
    <>
      {isFirstAccess && <Introduction />}
      {!isFirstAccess && <Game />}
    </>
  );
};
