import { useFirstTimePlaying } from "@/hooks/useFirstTimePlaying";
import * as S from "./styles";
import { TitleEcoBrasilAventura } from "../atoms/TitleEcoBrasilAventura/TitleEcoBrasilAventura";
import { ButtonArrow } from "../atoms/ButtonArrow/ButtonArrow";
export const Intro = () => {
  const { setFirstTime } = useFirstTimePlaying();
  return (
    <S.Container>
      <TitleEcoBrasilAventura />
      <div className="card">
        <h1>Bem vindo!</h1>
        <p>Esse é um game legal</p>
        <button onClick={() => setFirstTime(false)}>Próximo</button>
        <ButtonArrow />
      </div>
    </S.Container>
  );
};
