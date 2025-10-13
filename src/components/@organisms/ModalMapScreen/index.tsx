import { useModalManagerStore } from "@/lib/stores/useModalManagerStore";
import { Modal } from "../Modal/Modal";
import { cn, tw } from "@/lib/utils/utils";

import pampaPng from "@images/pampa/pampa.png";
import amazoniaPng from "@images/amazonia/amazonia.png";
import caatingaPng from "@images/caatinga/caatinga.png";
import cerradoPng from "@images/cerrado/cerrado.png";
import mataAtlanticaPng from "@images/mata-atlantica/mata-atlantica.png";
import pantanalPng from "@images/pantanal/pantanal.png";

import arrowPng from "@images/arrow.svg";

const stylesContainerIsland = tw(
  "w-25 flex flex-col items-center gap-1 font-primary text-2xl absolute"
);

export const ModalMapScreen = () => {
  const modal = useModalManagerStore((state) => state.modal);
  const handleCloseModal = useModalManagerStore(
    (state) => state.handleCloseModal
  );

  return (
    <Modal.Root open={modal === "map-screen"} onClose={handleCloseModal}>
      <Modal.Content>
        <Modal.Header title="Mapa das ilhas" />
        <Modal.Body>
          <div className="flex gap-5 w-250 h-100 justify-center items-center relative">
            <div className={cn(stylesContainerIsland, "left-0 top-0")}>
              <img src={pampaPng} alt="Imagem de Pampa" />
              <span>Pampa</span>
            </div>
            <div className={cn(stylesContainerIsland, "left-0 top-5")}>
              <img src={arrowPng} alt="Imagem de Pampa" />
              <span>Pampa</span>
            </div>
            <div className={cn(stylesContainerIsland, "left-30 bottom-0")}>
              <img src={amazoniaPng} alt="Imagem de Amazônia" />
              <span>Amazônia</span>
            </div>
            <div className={cn(stylesContainerIsland, "left-30 top-10")}>
              <img src={mataAtlanticaPng} alt="Imagem de Mata Atlântica" />
              <span>Mata Atlântica</span>
            </div>
            <div className={cn(stylesContainerIsland, "left-80 top-2")}>
              <img src={cerradoPng} alt="Imagem de Cerrado" />
              <span>Cerrado</span>
            </div>
            <div className={cn(stylesContainerIsland, "left-120 top-2")}>
              <img src={caatingaPng} alt="Imagem de Caatinga" />
              <span>Caatinga</span>
            </div>
            <div className={cn(stylesContainerIsland, "left-130 bottom-0")}>
              <img src={pantanalPng} alt="Imagem de Pantanal" />
              <span>Pantanal</span>
            </div>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
