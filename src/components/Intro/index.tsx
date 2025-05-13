import { useFirstTimePlaying } from "@/hooks/useFirstTimePlaying";
import * as S from "./styles";
export const Intro = () => {
  const { setFirstTime } = useFirstTimePlaying();
  return (
    <S.Container>
      <div>
        <h1>Bem vindo!</h1>
        <p>Esse é um game legal</p>
        <button onClick={() => setFirstTime(false)}>Próximo</button>
      </div>
    </S.Container>
  );
};
