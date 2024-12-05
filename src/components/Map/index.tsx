import { useControllerMap } from "@/hooks/useControllerMap";
import * as S from "./styles";

export const Map = () => {
  const { openMap } = useControllerMap();
  return (
    <S.Container openMap={openMap}>
      <h1>Map</h1>
    </S.Container>
  );
};
