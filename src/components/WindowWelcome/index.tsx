import { useState } from "react";
import { Button, Container, Title } from "./styles";

const WindowWelcome: React.FC = () => {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <Container>
        <Title>Seja bem-vindo</Title>
        <Button onClick={() => setOpen(false)}>fechar</Button>
      </Container>
    )
  );
};

export default WindowWelcome;
