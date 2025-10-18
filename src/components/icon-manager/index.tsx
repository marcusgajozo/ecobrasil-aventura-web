import { cn } from "@/lib/utils/utils";
import * as LucideIcons from "lucide-react";
import type React from "react";

export type LucideIconName = keyof typeof LucideIcons;

interface IconManagerProps {
  name: LucideIconName;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

interface IconButtonProps extends Omit<IconManagerProps, "onClick"> {
  buttonClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type IconButtonType = IconButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconManager = ({
  name,
  className = "",
  onClick,
}: IconManagerProps) => {
  if (!name || !LucideIcons[name]) {
    console.warn(`Ícone ${name} não encontrado`);
    return null;
  }

  const IconComponent = LucideIcons[name] as React.FC<
    React.SVGProps<SVGSVGElement>
  >;

  return <IconComponent onClick={onClick} className={cn(className)} />;
};

export const IconButton = ({
  name,
  onClick,
  className,
  buttonClassName,
  ...buttonProps
}: IconButtonType) => {
  return (
    <button
      type="button"
      className={cn("flex items-center justify-center", buttonClassName)}
      onClick={onClick}
      {...buttonProps}
    >
      <IconManager name={name} className={className} />
    </button>
  );
};
