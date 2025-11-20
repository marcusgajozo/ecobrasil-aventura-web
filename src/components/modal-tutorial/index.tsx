import { useModalManagerStore } from '@/lib/stores/use-modal-manager-store'
import { Modal } from '../modal'
import { Step1 } from './components/step-1'
import { useEffect, useState } from 'react'
import { Step2 } from './components/step-2'
import { Step3 } from './components/step-3'
import { Step4 } from './components/step-4'
import { useManagerGameStore } from '@/lib/stores/use-manager-game-store'

const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />]

export const ModalTutorial = () => {
  const modal = useModalManagerStore(state => state.modal)
  const [currentStep, setCurrentStep] = useState(0)
  const didTheTutorial = useManagerGameStore(state => state.didTheTutorial)

  const toGoBack = currentStep > 0
  const toGoForward = currentStep < steps.length - 1

  const handleCloseModal = useModalManagerStore(state => state.handleCloseModal)
  const handleOpenModal = useModalManagerStore(state => state.handleOpenModal)
  const setDidTheTutorial = useManagerGameStore(
    state => state.setDidTheTutorial
  )

  const handleNextStep = () => {
    if (currentStep < steps.length - 2) {
      setCurrentStep(currentStep + 1)
      return
    }
    setCurrentStep(currentStep + 1)
    setDidTheTutorial(true)
  }

  useEffect(() => {
    if (!didTheTutorial) {
      handleOpenModal('tutorial')
    }
  }, [didTheTutorial, handleOpenModal])

  useEffect(() => {
    if (modal === 'tutorial') {
      setCurrentStep(0)
    }
  }, [modal])

  return (
    <Modal.Root open={modal === 'tutorial'} onClose={handleCloseModal}>
      <Modal.Content>
        <Modal.Header title="Tutorial do Jogo" />
        <Modal.Body>{steps[currentStep]}</Modal.Body>
        <Modal.ContentButtons>
          <Modal.ButtonClose onClick={handleCloseModal} />
          {toGoBack && (
            <Modal.ButtonAction
              title="Voltar"
              iconName="Undo2"
              onClick={() => setCurrentStep(currentStep - 1)}
            />
          )}
          {toGoForward && (
            <Modal.ButtonAction
              title="Próximo"
              iconName="ArrowRight"
              onClick={handleNextStep}
            />
          )}
        </Modal.ContentButtons>
      </Modal.Content>
    </Modal.Root>
  )
}
