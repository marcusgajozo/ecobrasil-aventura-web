import { KeyboardControls } from "@react-three/drei";
import { ControllerCharacter } from "./components/ControllerCharacter";
import { keyboardMap } from "./constants/keyboardMap";

const Character = () => {
  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <ControllerCharacter />
      </KeyboardControls>
    </>
  );
};

export default Character;
