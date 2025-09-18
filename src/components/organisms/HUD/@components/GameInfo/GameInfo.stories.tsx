import type { Meta, StoryObj } from "@storybook/react";

import { GameInfo } from "./GameInfo";

const meta: Meta<typeof GameInfo> = {
  title: "Componentes/HUD(Heads-Up Display)/GameInfo",
  component: GameInfo,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
