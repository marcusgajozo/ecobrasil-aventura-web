import { useAudio } from "@/lib/hooks/useAudio";
import { ButtonText } from "../atoms/ButtonText/ButtonText";
import styles from "./styles.module.css";

export const GameInformation = () => {
  const { toggleBackgroundAudio } = useAudio();

  return (
    <div className={styles.container}>
      <div className={styles.contant}>
        <div className={styles.contantConfig}>
          <ButtonText title="Config" onClick={toggleBackgroundAudio} />
        </div>
      </div>
    </div>
  );
};
