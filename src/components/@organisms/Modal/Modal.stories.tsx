import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";

const ModalWrapper = ({ open: initialOpen = false, ...args }) => {
  const [open, setOpen] = useState(initialOpen);

  return (
    <>
      <button className="absolute z-99" onClick={() => setOpen(true)}>
        Abrir Modal
      </button>

      <Modal.Root open={open} onClose={() => setOpen(false)} {...args}>
        <Modal.Content>
          <Modal.Header title="Título do Modal" />
          <Modal.Body>
            <p>Este é o conteúdo do modal.</p>
          </Modal.Body>
          <Modal.ContentButtons>
            <Modal.ButtonClose onClick={() => setOpen(false)} />
            <Modal.ButtonAction />
          </Modal.ContentButtons>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

const meta: Meta<typeof ModalWrapper> = {
  title: "Componentes/Modal",
  component: ModalWrapper,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controla se o modal está aberto ou fechado",
    },
  },
  args: {
    open: false,
  },
  parameters: {
    docs: {
      description: {
        component: `
Modal com padrão de composição que permite estruturar o conteúdo de forma flexível.

## Uso:
\`\`\`jsx
<Modal.Root open={open} onClose={handleClose}>
  <Modal.Content>
    <Modal.Header title="Título" />
    <Modal.Body>
      Conteúdo do modal
    </Modal.Body>
    <Modal.Footer>
      Botões de ação
    </Modal.Footer>
  </Modal.Content>
</Modal.Root>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
  },
};
