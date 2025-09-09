import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type WithChildren = {
  children: React.ReactNode;
};

type RootProps = {
  open: boolean;
  onClose?: () => void;
} & WithChildren;

const Root = ({ open, children, onClose }: RootProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setIsOpen(true);
      setIsClosing(false);
    } else if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 400);
    }
  }, [open, isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      onClose?.();
    }, 400);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  const containerClasses = `${styles.container} ${
    isClosing ? styles.closing : ""
  }`;

  return (
    <div className={containerClasses} onClick={handleBackdropClick}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

type HeaderProps = {} & WithChildren;

const Header = ({ children }: HeaderProps) => {
  return <>{children}</>;
};

type ContentProps = {} & WithChildren;

const Content = ({ children }: ContentProps) => {
  return <div className={styles.modalContent}>{children}</div>;
};

type BodyProps = {} & WithChildren;

const Body = ({ children }: BodyProps) => {
  return <>{children}</>;
};

type FooterProps = {} & WithChildren;

const Footer = ({ children }: FooterProps) => {
  return <>{children}</>;
};

export const Modal = {
  Root,
  Header,
  Body,
  Footer,
  Content,
};
