import React from "react";
import { IconManager } from "../IconManager";
import styles from "./styles.module.css";
import { Loader } from "../Loader/Loader";
import { cn } from "@/lib/utils/utils";

export type ButtonProps = {
  isLoading?: boolean;
  iconName?: React.ComponentProps<typeof IconManager>["name"];
} & React.ComponentProps<"button">;

export const Button = ({
  children,
  isLoading,
  iconName,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(styles.futuristicButton, className)} {...props}>
      <span className={cn(styles.buttonText)}>
        {children}
        {iconName && !isLoading && (
          <IconManager name={iconName} className={cn(styles.icon)} />
        )}
        {isLoading && (
          <Loader
            className={cn(styles.icon, styles.iconNeon, styles.isLoading)}
          />
        )}
      </span>
    </button>
  );
};
