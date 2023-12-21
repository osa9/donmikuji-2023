import React from "react";

import { getMediaUrl } from "../../lib/utils";
import { HistoryItem, useGachaHistory, useGachaStore } from "../../stores/pu";

export interface OpeningSceneProps {
  onClose: () => void;
}

export const History: React.FC<{ item: HistoryItem }> = ({ item }) => {
  const date = new Date(item.date);
  const jstDate = new Date(
    date.getTime() + date.getTimezoneOffset() * 60 * 1000 + 32400000,
  );
  const dateString = `${jstDate.getFullYear()}年${
    jstDate.getMonth() + 1
  }月${jstDate.getDate()}日 ${jstDate.getHours()}時${jstDate.getMinutes()}分`;
  const character = item.character;
  return (
    <p>
      {dateString} {character.name}
    </p>
  );
};

export const HistoryScene: React.FC<OpeningSceneProps> = ({ onClose }) => {
  const { history, senbei, price, totalPrice, totalSenbei } = useGachaHistory();
  const sortedHistory = history.slice().reverse();
  return (
    <div
      className="w-full h-screen flex justify-center relative  text-white"
      style={{
        backgroundImage: `url('${getMediaUrl("/background.png")}')`,
      }}
    >
      <div
        className="overflow-scroll flex flex-col items-center px-10 py-2 my-10"
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          width: "80%",
        }}
      >
        <div className="text-2xl font-extrabold mb-4">祈願履歴</div>
        <div className="text-xl font-bold mb-4">
          {history.length === 0 && "まだ祈願していません"}
          {history.length !== 0 &&
            senbei === 0 &&
            `${totalSenbei}枚(${totalPrice}円)のせんべいを割りましたが、バニ神子ドン美は現れませんでした。`}
          {senbei > 0 &&
            `バニ神子ドン美が現れるまで${senbei}枚(${price}円)のせんべいを割りました。`}
        </div>
        <div>
          {sortedHistory.map((item, index) => (
            <History item={item} key={index} />
          ))}
        </div>
        <button className="absolute top-10 right-10" onClick={onClose}>
          <img src={getMediaUrl("/closing-button.png")} alt="閉じる" />
        </button>
      </div>
    </div>
  );
};

export default HistoryScene;
