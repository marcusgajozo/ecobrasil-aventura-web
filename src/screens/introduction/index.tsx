import { Button } from "@/components/button";
import { useManagerGameStore } from "@/lib/stores/use-manager-game-store";
import styles from "./styles.module.css";

export const Introduction = () => {
  const setIsFirstAccess = useManagerGameStore(
    (state) => state.setIsFirstAccess
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>EcoBrasil Aventura</h1>
        <h2>Um jogo de educação ambiental</h2>
        <Button iconName="Play" onClick={() => setIsFirstAccess(false)}>
          Começar
        </Button>
      </div>
      <div className={styles.content}>
        <div className={styles.credits}>
          <p>
            Longe, flutuando no silêncio do espaço, existiam as Ilhas Celestiais
            do Brasil. Cada uma era um tesouro vivo, guardando a incrível
            biodiversidade da Amazónia, a vasta planície dos Pampas, a beleza do
            Cerrado e a riqueza de todos os outros biomas brasileiros. Elas
            brilhavam com cores e sons, um santuário de pura natureza.
          </p>
          <p>
            Mas uma sombra começou a crescer. Alimentada pelo esquecimento e
            pelo descuido na Terra, uma misteriosa "Névoa do Esquecimento" subiu
            ao espaço. Lenta e silenciosa, ela começou a sugar as cores, a
            silenciar os animais e a apagar a memória da importância de cada
            bioma, ameaçando fazê-los desaparecer para sempre.
          </p>
          <p>
            Num último esforço para salvar este paraíso, foi ativado um guardião
            especial: BIO, um pequeno robô com um grande coração e um cérebro
            programado com sabedoria. A sua missão: viajar para cada ilha
            enfraquecida e reacender a sua essência com o poder do conhecimento.
          </p>
          <p>
            Agora, o BIO precisa da sua ajuda! Você irá guiá-lo através de cada
            ilha. Para dissipar a névoa e trazer a vida de volta, você precisará
            de provar que a sabedoria da natureza não foi esquecida. Responda
            corretamente a 3 perguntas sobre a fauna, a flora e os cuidados
            ambientais para restaurar o poder de cada bioma.
          </p>
          <p>
            Cada ilha salva revelará o caminho para a próxima. Salve todos os
            seis biomas e ajude a proteger a beleza do Brasil para sempre.
          </p>
          <p>
            Você está pronto para aceitar o desafio e se tornar um Guardião dos
            Biomas?
          </p>
        </div>
      </div>
    </div>
  );
};
