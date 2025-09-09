import React from "react";
import { IconManager } from "../IconManager";
import styles from "./styles.module.css";

export type ButtonProps = {
  isLoading?: boolean;
  iconName?: React.ComponentProps<typeof IconManager>["name"];
} & React.ComponentProps<"button">;

export const Button = ({
  children,
  isLoading,
  iconName,
  ...props
}: ButtonProps) => {
  return (
    <button className={styles.futuristicButton} {...props}>
      <span className={styles.buttonText}>
        {children}
        {iconName && !isLoading && <IconManager name={iconName} />}
        {isLoading && <span className={styles.loader} />}
      </span>
    </button>
  );
};
