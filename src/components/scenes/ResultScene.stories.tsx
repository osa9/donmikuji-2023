import { Story } from "@ladle/react";
import { table } from "../../stores/pu";
import { ResultSceneComponent, ResultSceneComponentProps } from "./ResultScene";

const charatersTable = [
  table[0],
  table[1],
  table[2],
  table[3],
  table[4],
  table[5],
  table[6],
  table[7],
  table[7],
  table[7],
  table[7],
  table[7],
];

export const SingleResultScene: Story<ResultSceneComponentProps> = (args) => {
  return <ResultSceneComponent {...args} />;
};

SingleResultScene.args = {
  characters: [charatersTable[0]],
  resultString: "ああああああああああああああああああああ",
  completed: true,
  setCompleted: () => {},
  onClose: () => {},
};

export const MultiResultScene: Story<ResultSceneComponentProps> = (args) => {
  return <ResultSceneComponent {...args} />;
};

MultiResultScene.args = {
  characters: charatersTable,
  resultString: "ああああああああああああああああああああ",
  completed: true,
  setCompleted: () => {},
  onClose: () => {},
};
