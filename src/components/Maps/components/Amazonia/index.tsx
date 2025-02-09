import { POSITIONS_MAPS } from "@/constants";
import { BigIsland } from "../BigIsland";
import { BushStone } from "../BushStone";
import { DryTree } from "../DryTree";
import { TeleportPlatform } from "../TeleportPlatform";
import { Tree1 } from "../Tree1";
import { Tree2 } from "../Tree2";
import { Vector3 } from "three";

// TODO: adiciona plataforma de teleporte
// TODO: colocar uma transição de teletransporte bonitinha
// TODO: criar um componente para teletransporte(para add nos outros mapas)
// TODO: teleportar personagem para outro mapa somente de mapa atual estiver salvo
// TODO: colocar um tempinho extra para o teletransporte mostrando a animação

export const Amazonia = () => {
  return (
    <>
      <TeleportPlatform
        positionPlatformA={new Vector3(-12, 6, 1)}
        positionPlatformB={new Vector3(-12, 6, -8)}
      />
      <BushStone scale={1} position={[10, 6, 0]} />
      <BushStone scale={1} position={[0, 6, 0]} />
      <DryTree scale={1} position={[3, 8, 0]} />
      <Tree2 scale={4} position={[10, 11, 0]} />
      <Tree2 scale={4} position={[10, 11, 13]} />
      <Tree1 scale={4} position={[0, 11, 10]} />
      <Tree1 scale={4} position={[5, 11, 10]} />
      <BigIsland positionMap={POSITIONS_MAPS["amazonia"]} />
    </>
  );
};
