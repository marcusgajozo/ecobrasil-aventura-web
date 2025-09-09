import { cn } from "@/lib/utils/utils";
import React from "react";
import styles from "./styles.module.css";

export const Loader = ({ className }: React.ComponentProps<"span">) => {
  return <span className={cn(styles.loader, className)} />;
};
