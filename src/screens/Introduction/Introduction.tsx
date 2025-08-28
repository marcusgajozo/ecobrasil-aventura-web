import styles from "./styles.module.css";

export const Introduction = () => {
  return (
    <div className={styles.teste}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.scrollText}>
            <h1>EPISÓDIO IV</h1>
            <h2>UMA NOVA ESPERANÇA</h2>
            <p>Há muito tempo, em uma galáxia muito, muito distante...</p>
            <p>
              É um período de guerra civil. Naves rebeldes, atacando de uma base
              secreta, conseguiram sua primeira vitória contra o maligno Império
              Galáctico...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
