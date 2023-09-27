import { Meta, StoryObj } from "@storybook/react";
import SearchTab from "./SearchTab";

const meta = {
  title: "Example/Header/SearchTab",
  component: SearchTab,
  tags: ["autodocs"],
} satisfies Meta<typeof SearchTab>

export default meta;

type Story = StoryObj<typeof meta>

export const Destination: Story = {
  args: {
    title: "Where",
    description: "Search destinations",
    input: true,
    width: 320,
  }
}