import { Story } from "@ladle/react";
import {
  OpeningScene as OpeningSceneComponent,
  OpeningSceneProps,
} from "./OpeningScene";

export const OpeningScene: Story<OpeningSceneProps> = (args) => (
  <OpeningSceneComponent {...args} />
);

OpeningScene.args = {
  onEntered: () => {},
};

OpeningScene.argTypes = {
  onEntered: { action: "clicked" },
};
