import { NAME_ISLAND_FORMATED } from "@/lib/constants/island";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils/utils";

export const CurrentIsland = () => {
  const currentIsland = useManagerIslandStore((state) => state.currentIsland);
  return (
    <div className="flex flex-col items-center select-none text-primary-500">
      <span className={cn("text-3xl font-primary", styles.borderText)}>
        Ilha atual
      </span>
      <span
        className={cn("text-5xl font-primary leading-5", styles.borderText)}
      >
        {NAME_ISLAND_FORMATED[currentIsland]}
      </span>
    </div>
  );
};
