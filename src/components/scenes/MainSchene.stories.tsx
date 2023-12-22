import { Story } from "@ladle/react";
import { MainScene as MainSceneComponent, MainSceneProps } from "./MainScene";

export const MainScene: Story<MainSceneProps> = (args) => (
  <MainSceneComponent {...args} />
);

MainScene.args = {
  onStartGacha: () => {},
  onHistory: () => {},
};

MainScene.argTypes = {
  onStartGacha: { action: "clicked" },
  onHistory: { action: "clicked" },
};
