import type { Meta, StoryObj } from "@storybook/react";

import { HUD } from "./HUD";

const meta: Meta<typeof HUD> = {
  title: "Componentes/HUD(Heads-Up Display)/HUD",
  component: HUD,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
