import { BuildGame } from "./components/BuildGame";
import { GameProviders } from "./providers";

const Game = () => {
  return (
    <GameProviders>
      <BuildGame />
    </GameProviders>
  );
};

export default Game;
