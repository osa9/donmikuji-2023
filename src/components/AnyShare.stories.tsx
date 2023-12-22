import { Story } from "@ladle/react";
import { AnyShare as AnyShareComponent, AnyShareProps } from "./AnyShare";

export const AnyShare: Story<AnyShareProps> = (args) => (
  <AnyShareComponent {...args} />
);

AnyShare.args = {
  url: "https://www.google.com",
  title: "Google",
};

AnyShare.argTypes = {
  url: { control: { type: "text" } },
  title: { control: { type: "text" } },
};
