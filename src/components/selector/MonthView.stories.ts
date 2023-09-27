import { Meta, StoryObj } from "@storybook/react";
import MonthView from "./MonthView";

const meta = {
  title: "Example/Components/CalendarSelector/MonthView",
  component: MonthView,
  tags: ["autodocs"],
} satisfies Meta<typeof MonthView>;

export default meta;

type Story = StoryObj<typeof meta>

export const ControlledMonthView: Story = {
  args: {
    monthOffset: 2,
  }
}