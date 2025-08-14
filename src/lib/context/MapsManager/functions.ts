import { NAME_ISLAND } from "@/lib/constants/island";

// Função para gerar um mapsPaths aleatório que conecta todos os mapas em NAME_ISLAND
export const generateRandomMapsPaths = () => {
  const shuffledMaps = [...NAME_ISLAND].sort(() => Math.random() - 0.5); // Embaralha os mapas

  // Cria o array base garantindo que todos os mapas serão incluídos
  const paths = shuffledMaps.map((name, index) => {
    const nextIndexA = (index + 1) % shuffledMaps.length; // Proximo mapa A
    const nextIndexB = (index + 2) % shuffledMaps.length; // Proximo mapa B (para variedade)

    return {
      name,
      path: {
        A: shuffledMaps[nextIndexA],
        B: shuffledMaps[nextIndexB],
      },
    };
  });

  // Adiciona transições extras aleatórias para maior complexidade
  const extraPathsCount = Math.floor(NAME_ISLAND.length / 2); // Adiciona alguns caminhos extras

  for (let i = 0; i < extraPathsCount; i++) {
    const randomIndex = Math.floor(Math.random() * paths.length);
    const randomTarget =
      NAME_ISLAND[Math.floor(Math.random() * NAME_ISLAND.length)];

    // Adiciona um caminho aleatório ao objeto escolhido
    paths[randomIndex].path[Math.random() > 0.5 ? "A" : "B"] = randomTarget;
  }

  return paths;
};
