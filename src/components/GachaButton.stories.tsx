import type { Story } from "@ladle/react";
import { GachaButton, GachaButtonProps } from "./GachaButton";

export const NumberGachaButton: Story<GachaButtonProps> = (args) => (
  <GachaButton {...args} />
);

NumberGachaButton.args = {
  picks: 1,
};

NumberGachaButton.argTypes = {
  onClick: { action: "clicked" },
  picks: { control: { type: "range", min: 1, max: 10, step: 1 } },
};
