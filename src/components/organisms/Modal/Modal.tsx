import { useEffect, useState } from "react";
import * as S from "./styles";

import closeSvg from "@images/close.svg";

type WithChildren = {
  children: React.ReactNode;
};

type RootProps = {
  imageTitlePath?: string;
  open: boolean;
  onClose?: () => void;
} & WithChildren;

const Root = ({ open, imageTitlePath, children, onClose }: RootProps) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <S.Container onClick={handleBackdropClick}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        {imageTitlePath && (
          <div className="title-modal">
            <img
              src={imageTitlePath}
              alt="imagem do título"
              draggable={false}
            />
          </div>
        )}
        <div className="close" onClick={handleClose}>
          <img src={closeSvg} alt="imagem de um X" draggable={false} />
        </div>
        {children}
      </div>
    </S.Container>
  );
};

type HeaderProps = {} & WithChildren;

const Header = ({ children }: HeaderProps) => {
  return <>{children}</>;
};

type ContentProps = {} & WithChildren;

const Content = ({ children }: ContentProps) => {
  return <S.Content>{children}</S.Content>;
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
