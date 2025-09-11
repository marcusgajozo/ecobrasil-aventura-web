import React from "react";
import { IconManager } from "../IconManager";
import styles from "./styles.module.css";
import { Loader } from "../Loader/Loader";
import { cn, tw } from "@/lib/utils/utils";

export type ButtonProps = {
  isLoading?: boolean;
  iconName?: React.ComponentProps<typeof IconManager>["name"];
  variant?: keyof typeof stylesVariant;
} & React.ComponentProps<"button">;

const stylesVariant = {
  success: tw("bg-success-600"),
  destructive: tw("bg-destructive"),
  primary: tw("bg-primary"),
} as const;

export const Button = ({
  children,
  isLoading,
  iconName,
  className,
  variant = "success",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(stylesVariant[variant], styles.futuristicButton, className)}
      {...props}
    >
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
