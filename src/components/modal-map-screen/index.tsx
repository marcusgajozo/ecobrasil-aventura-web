import { useModalManagerStore } from "@/lib/stores/use-modal-manager-store";
import { cn, tw } from "@/lib/utils/utils";

import pampaPng from "@images/pampa/pampa.png";
import amazoniaPng from "@images/amazonia/amazonia.png";
import caatingaPng from "@images/caatinga/caatinga.png";
import cerradoPng from "@images/cerrado/cerrado.png";
import mataAtlanticaPng from "@images/mata-atlantica/mata-atlantica.png";
import pantanalPng from "@images/pantanal/pantanal.png";

import arrowSvg from "@images/arrow.svg";
import { Modal } from "../modal";

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
          <div className="flex gap-5 w-200 h-100 justify-center items-center relative">
            <div className={cn(stylesContainerIsland, "left-15 top-15")}>
              <img src={pampaPng} alt="Imagem de Pampa" />
              <span>Pampa</span>
            </div>
            <div className={cn(stylesContainerIsland, "w-20 left-40 top-25")}>
              <img
                src={arrowSvg}
                alt="Imagem de Pampa"
                className="rotate-140"
              />
            </div>
            <div className={cn(stylesContainerIsland, "w-20 left-40 top-18")}>
              <img
                src={arrowSvg}
                alt="Imagem de Pampa"
                className="rotate-320"
              />
            </div>
            <div className={cn(stylesContainerIsland, "left-55 bottom-0")}>
              <img src={amazoniaPng} alt="Imagem de Amazônia" />
              <span>Amazônia</span>
            </div>
            <div className={cn(stylesContainerIsland, "left-90 top-82")}>
              <img
                src={arrowSvg}
                alt="Imagem de Pampa"
                className="rotate-180"
              />
            </div>
            <div className={cn(stylesContainerIsland, "left-85 top-75")}>
              <img src={arrowSvg} alt="Imagem de Pampa" className="rotate-1" />
            </div>
            <div className={cn(stylesContainerIsland, "w-20 left-85 top-27")}>
              <img
                src={arrowSvg}
                alt="Imagem de Pampa"
                className="rotate-220"
              />
            </div>
            <div className={cn(stylesContainerIsland, "w-20 left-35 top-64")}>
              <img
                src={arrowSvg}
                alt="Imagem de Pampa"
                className="rotate-220"
              />
            </div>
            <div className={cn(stylesContainerIsland, "w-20 left-35 top-55")}>
              <img src={arrowSvg} alt="Imagem de Pampa" className="rotate-40" />
            </div>
            <div className={cn(stylesContainerIsland, "left-60 top-0")}>
              <img src={mataAtlanticaPng} alt="Imagem de Mata Atlântica" />
              <span className="text-nowrap">Mata Atlântica</span>
            </div>
            <div className={cn(stylesContainerIsland, "w-20 left-85 top-27")}>
              <img
                src={arrowSvg}
                alt="Imagem de Pampa"
                className="rotate-220"
              />
            </div>
            <div className={cn(stylesContainerIsland, "w-20 left-85 top-20")}>
              <img src={arrowSvg} alt="Imagem de Pampa" className="rotate-40" />
            </div>
            <div className={cn(stylesContainerIsland, "left-105 top-15")}>
              <img src={cerradoPng} alt="Imagem de Cerrado" />
              <span>Cerrado</span>
            </div>
            <div className={cn(stylesContainerIsland, "w-20 left-135 top-30")}>
              <img
                src={arrowSvg}
                alt="Imagem de Pampa"
                className="rotate-190"
              />
            </div>
            <div className={cn(stylesContainerIsland, "w-20 left-135 top-37")}>
              <img src={arrowSvg} alt="Imagem de Pampa" className="rotate-8" />
            </div>
            <div className={cn(stylesContainerIsland, "left-160 top-25")}>
              <img src={caatingaPng} alt="Imagem de Caatinga" />
              <span>Caatinga</span>
            </div>
            <div className={cn(stylesContainerIsland, "w-20 left-143 top-55")}>
              <img
                src={arrowSvg}
                alt="Imagem de Pampa"
                className="rotate-140"
              />
            </div>
            <div className={cn(stylesContainerIsland, "w-20 left-143 top-63")}>
              <img
                src={arrowSvg}
                alt="Imagem de Pampa"
                className="rotate-320"
              />
            </div>
            <div className={cn(stylesContainerIsland, "left-120 bottom-0")}>
              <img src={pantanalPng} alt="Imagem de Pantanal" />
              <span>Pantanal</span>
            </div>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
