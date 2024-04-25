import React from "react";
import { CiClock2 } from "react-icons/ci";
const CardPicture = ({ card }) => {
  return (
    <div className="bg-[length:416px_278px] mr-[20px] h-[248px]">
      <div
        style={{ backgroundImage: `${card.backgroundImageUrl}` }}
        className="max-w-[400px] h-[240px] ml-[18px] bg-no-repeat"
      >
        <div
          className="h-[4px] w-[46px] my-[30px] rounded-xl mx-[20px]"
          style={{ backgroundImage: `${card.backgroundImage}` }}
        ></div>
        <h5 className="font-hqBold text-white mt-[160px] ml-[20px]">
          {card.title}
        </h5>
        <div
          style={{ color: "white" }}
          className="font-machinaRegular text-xs mt-[34px] ml-[250px]"
        >
          <CiClock2 className="inline-block w-[16px] h-[16px] mr-1" />
          {card.time}
        </div>
      </div>
    </div>
  );
};

export default CardPicture;
