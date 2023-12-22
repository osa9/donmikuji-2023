import { Story } from "@ladle/react";
import { SkipButton as Button, SkipButtonProps } from "./SkipButton";

export const SkipButton: Story<SkipButtonProps> = (args) => (
  <Button {...args} />
);

SkipButton.args = {
  onClick: () => {},
};

SkipButton.argTypes = {
  onClick: { action: "clicked" },
};
