import { Meta, StoryObj } from "@storybook/react";
import CalendarSelector from "./CalendarSelector"

const meta = {
  title: "Example/Components/CalendarSelector",
  component: CalendarSelector,
  tags: ["autodocs"],
} satisfies Meta<typeof CalendarSelector>

export default meta;
type Story = StoryObj<typeof meta>;

export const _CalendarSelector: Story = {}