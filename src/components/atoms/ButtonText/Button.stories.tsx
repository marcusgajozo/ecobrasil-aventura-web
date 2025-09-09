import type { Meta, StoryObj } from "@storybook/react";

import { ButtonText as Button } from "./ButtonText";

const meta: Meta<typeof Button> = {
  title: "Componentes/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    colorText: { control: "color" },
    colorBorder: { control: "color" },
    textSizeRem: { control: "number" },
    onClick: { action: "clicked" },
    title: { control: "text" },
  },

  args: {
    title: "Button",
    colorText: "#FFFFFF",
    colorBorder: "#000000",
    textSizeRem: 1.5,
    onClick: () => alert("Botão Clicado!"),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
  },
};
