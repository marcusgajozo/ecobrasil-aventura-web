import type { Meta, StoryObj } from "@storybook/react";

import { ModalQuiz } from "./ModalQuiz";

const meta: Meta<typeof ModalQuiz> = {
  title: "Componentes/ModalQuiz",
  component: ModalQuiz,
  tags: ["autodocs"],
  argTypes: {},

  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
