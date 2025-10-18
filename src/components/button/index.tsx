import React from "react";

import styles from "./styles.module.css";

import { cn, tw } from "@/lib/utils/utils";
import { IconManager } from "../icon-manager";
import { Loader } from "lucide-react";

export type ButtonProps = {
  isLoading?: boolean;
  iconName?: React.ComponentProps<typeof IconManager>["name"];
  variant?: keyof typeof stylesVariant;
} & React.ComponentProps<"button">;

const stylesVariant = {
  success: tw("bg-success-600 disabled:bg-success-700"),
  destructive: tw("bg-destructive disabled:bg-destructive-700"),
  primary: tw("bg-primary disabled:bg-primary-700"),
} as const;

export const Button = ({
  children,
  isLoading,
  iconName,
  className,
  variant = "success",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(stylesVariant[variant], styles.futuristicButton, className)}
      disabled={disabled || isLoading}
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
