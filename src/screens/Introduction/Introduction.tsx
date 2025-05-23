import { useFirstTimePlaying } from "@/lib/hooks/useFirstTimePlaying";
import * as S from "./styles";
import { TitleEcoBrasilAventura } from "../../components/atoms/TitleEcoBrasilAventura/TitleEcoBrasilAventura";
import { ButtonArrow } from "../../components/atoms/ButtonArrow/ButtonArrow";
import { FirstCard } from "./@components/FirstCard";
import { SecondCard } from "./@components/SecondCard";
import { ThirdCard } from "./@components/ThirdCard";
import { FourthCard } from "./@components/FourthCard";
import { useState } from "react";
import { CurrentCard } from "./@components/CurrentCard";
import { ButtonText } from "../../components/atoms/ButtonText/ButtonText";

const cards = [FirstCard, SecondCard, ThirdCard, FourthCard];

export const Introduction = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const { setFirstTime } = useFirstTimePlaying();

  const quantityCards = cards.length;

  const handleNextCard = () => setCurrentCard((prev) => prev + 1);
  const handlePreviousCard = () => setCurrentCard((prev) => prev - 1);

  const handleFinish = () => {
    setFirstTime(false);
  };

  return (
    <S.Container>
      <TitleEcoBrasilAventura />
      <div className="card">
        <h1>Bem vindo(a)!</h1>
        <p>Esse é um game legal</p>
        <CurrentCard cards={cards} currentCardNum={currentCard} />
        <div className="buttons">
          <div>
            {currentCard > 0 && (
              <ButtonArrow direction="right" onClick={handlePreviousCard} />
            )}
          </div>
          <div>
            {currentCard + 1 !== quantityCards && (
              <ButtonArrow onClick={handleNextCard} />
            )}
            {currentCard + 1 === quantityCards && (
              <ButtonText
                title="Jogar!"
                textSizeRem={2}
                onClick={handleFinish}
              />
            )}
          </div>
        </div>
      </div>
    </S.Container>
  );
};
