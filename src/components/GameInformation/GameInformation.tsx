import { useModalManagerStore } from "@/lib/stores/useModalManagerStore";
import { ButtonText } from "../atoms/ButtonText/ButtonText";
import styles from "./styles.module.css";

export const GameInformation = () => {
  const handleOpenModal = useModalManagerStore(
    (state) => state.handleOpenModal
  );

  return (
    <div className={styles.container}>
      <div className={styles.contant}>
        <div className={styles.contantConfig}>
          <ButtonText
            title="Config"
            onClick={() => handleOpenModal("game-setup")}
          />
        </div>
        <div className={styles.contantFeedback}>
          <ButtonText
            title="Avalie o jogo"
            onClick={() => handleOpenModal("game-setup")}
          />
        </div>
      </div>
    </div>
  );
};
