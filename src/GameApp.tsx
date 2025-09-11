import { useManagerGameStore } from "./lib/stores/useManagerGameStore";
import { Game } from "./screens/Game/Game";
import { Introduction } from "./screens/Introduction/Introduction";

export const GameApp = () => {
  const isFirstAccess = useManagerGameStore((state) => state.isFirstAccess);
  return (
    <>
      {isFirstAccess && <Introduction />}
      {!isFirstAccess && <Game />}
    </>
  );
};
