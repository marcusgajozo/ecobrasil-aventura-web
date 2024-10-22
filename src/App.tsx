import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Suspense, useState } from "react";

import { KeyboardControls } from "@react-three/drei";
import Maps from "./components/Maps";
import { ControllerCharacter } from "./components/controller-character";

const KeyboardMap = [
  { name: "forward", keys: ["ArrowUp", "w"] },
  { name: "backward", keys: ["ArrowDown", "s"] },
  { name: "left", keys: ["ArrowLeft", "a"] },
  { name: "right", keys: ["ArrowRight", "d"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
];

const App = () => {
  const [open, setOpen] = useState(false);

  const coli = () => {
    console.log("entrei");
    setOpen(true);
  };

  return (
    <KeyboardControls map={KeyboardMap}>
      <Canvas shadows camera={{ position: [10, 10, -10], fov: 30 }}>
        <Suspense>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 0]} intensity={1.5} castShadow />
          <pointLight position={[0, 10, 0]} intensity={3} distance={10} />
          <Physics debug>
            <Maps />
            <group>
              <ControllerCharacter />
            </group>
            <RigidBody onCollisionEnter={coli}>
              <mesh>
                <boxGeometry />
                <meshBasicMaterial />
              </mesh>
            </RigidBody>
          </Physics>
        </Suspense>
      </Canvas>
      {open && (
        <div
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            position: "absolute",
            width: "100px",
            height: "100px",
            backgroundColor: "#000",
          }}
        >
          <button onClick={() => setOpen(false)}>fechar</button>
        </div>
      )}
    </KeyboardControls>
  );
};

export default App;
