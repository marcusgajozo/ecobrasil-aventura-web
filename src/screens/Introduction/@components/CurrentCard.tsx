export const CurrentCard = ({
  cards,
  currentCardNum,
}: {
  cards: (() => JSX.Element)[];
  currentCardNum: number;
}) => {
  const CurrentCard = cards[currentCardNum];
  return <CurrentCard />;
};
