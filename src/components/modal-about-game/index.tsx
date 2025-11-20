import { useModalManagerStore } from '@/lib/stores/use-modal-manager-store'
import { Modal } from '../modal'

import reactjsPng from '@images/reactjs.png'
import threejsPng from '@images/threejs.png'

export function ModalAboutGame() {
  const modal = useModalManagerStore(state => state.modal)

  const handleCloseModal = useModalManagerStore(state => state.handleCloseModal)

  return (
    <Modal.Root open={modal === 'about-game'} onClose={handleCloseModal}>
      <Modal.Content>
        <Modal.Header title="Sobre o Jogo" />
        <Modal.Body>
          <div className="flex items-center gap-8">
            <div className="flex w-60 flex-col gap-4">
              <img src={reactjsPng} alt="ReactJS" />
              <img src={threejsPng} alt="ThreeJS" />
            </div>
            <div>
              <div>
                <h2 className="text-3xl">Sobre o jogo</h2>
                <p className="w-100">
                  Este jogo foi desenvolvido utilizando ReactJS e ThreeJS,
                  proporcionando uma experiência interativa e imersiva.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.ContentButtons>
          <Modal.ButtonClose onClick={handleCloseModal} />
        </Modal.ContentButtons>
      </Modal.Content>
    </Modal.Root>
  )
}
