import { useFirstTimePlaying } from "./hooks/useFirstTimePlaying";
import { Game } from "./screens/Game/Game";
import { Introduction } from "./screens/Introduction/Introduction";

export const GameApp = () => {
  const { firstTime } = useFirstTimePlaying();
  return (
    <>
      {firstTime && <Introduction />}
      {!firstTime && <Game />}
    </>
  );
};
