import type { Meta, StoryObj } from "@storybook/react";

import { ModalQuiz } from "./ModalQuiz";

const meta: Meta<typeof ModalQuiz> = {
  title: "Componentes/ModalQuiz",
  component: ModalQuiz,
  tags: ["autodocs"],
  argTypes: {
    isLoading: { control: "boolean" },
    iconName: { control: "text" },
  },

  args: {
    children: "Button",
    onClick: () => console.log("Botão Clicado!"),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
