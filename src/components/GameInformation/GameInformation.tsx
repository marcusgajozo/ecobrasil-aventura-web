import { ButtonText } from "../atoms/ButtonText/ButtonText";
import styles from "./styles.module.css";

export const GameInformation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contant}>
        <div className={styles.contantConfig}>
          <ButtonText title="Config" />
        </div>
      </div>
    </div>
  );
};
