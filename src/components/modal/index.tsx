import { cn } from "@/lib/utils/utils";
import React from "react";
import styles from "./styles.module.css";
import { Button } from "../button";

type WithChildren = {
  children: React.ReactNode;
};

type ModalRootProps = {
  open: boolean;
  onClose?: () => void;
} & WithChildren;

const ModalRoot = ({ open, children, onClose }: ModalRootProps) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  if (!open) return null;

  return (
    <div className="w-screen h-screen absolute display-flex justify-center items-center top-0 left-0 z-99999">
      <div
        className="flex justify-center items-center h-full w-full"
        onClick={handleBackdropClick}
      >
        <div className="relative min-w-content">
          <div className="absolute top-[-15px] right-8 z-2">
            <Button variant="destructive" iconName="X" onClick={onClose} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

type ModalHeaderProps = { title: string };

const ModalHeader = ({ title }: ModalHeaderProps) => {
  return (
    <h1 className={cn(styles.header, "text-4xl animate-bounce")}>{title}</h1>
  );
};

type ModalContentProps = {} & WithChildren;

const ModalContent = ({ children }: ModalContentProps) => {
  return <div className={cn(styles.content)}>{children}</div>;
};

type ModalBodyProps = React.ComponentProps<"div">;

const ModalBody = ({ children, ...props }: ModalBodyProps) => {
  return <div {...props}>{children}</div>;
};

type ModalContentButtonsProps = { className?: string } & WithChildren;

const ModalContentButtons = ({
  children,
  className,
}: ModalContentButtonsProps) => {
  return (
    <div className={cn("flex w-full justify-center gap-2", className)}>
      {children}
    </div>
  );
};

type ModalButtonProps = { title?: string } & Omit<
  React.ComponentProps<typeof Button>,
  "children"
>;

const ModalButtonAction = ({
  title = "Confirmar",
  iconName = "Check",
  ...props
}: ModalButtonProps) => {
  return (
    <Button iconName={iconName} {...props}>
      {title}
    </Button>
  );
};

const ModalButtonClose = ({
  title = "Fechar",
  iconName = "X",
  ...props
}: ModalButtonProps) => {
  return (
    <Button variant="destructive" iconName={iconName} {...props}>
      {title}
    </Button>
  );
};

/**
 *
 * A system component Modal that follows the Compound Component pattern.
 * Provides a clean separation of concerns and maximum flexibility for different modal.
 *
 * @example
 *
 * // Basic usage
 * <Modal.Root open onClose={handleCloseModal}>
 *   <Modal.Content>
 *     <Modal.Header title="your title" />
 *     <Modal.Body>
 *       <div>Your component</div>
 *     </Modal.Body>
 *     <Modal.ContentButtons>
 *       <Modal.ButtonAction />
 *       <Modal.ButtonClose />
 *     </Modal.ContentButtons>
 *   </Modal.Content>
 * </Modal.Root>
 */
export const Modal = {
  Root: ModalRoot,
  Header: ModalHeader,
  Body: ModalBody,
  Content: ModalContent,
  ContentButtons: ModalContentButtons,
  ButtonAction: ModalButtonAction,
  ButtonClose: ModalButtonClose,
};
