import React from "react";

import Process from "../public/imgs/Process";
import { CiClock2 } from "react-icons/ci";
import { BsBook } from "react-icons/bs";

const Card = ({ card }) => {
  return (
    <div className="bg-[length:416px_278px]  max-w-[416px] h-[248px] px-[40px] ">
      {card.id !== 2 && (
        <div
          className="h-[4px] w-[46px] my-[30px] rounded-xl"
          style={{ backgroundImage: `${card.backgroundImage}` }}
        ></div>
      )}
      <ul className="flex flex-col gap-y-4 mt-[30px]">
        <li>
          <h5 className="font-hqBold text-white text-base">{card.title}</h5>
        </li>
        <li>
          {card.tagName &&
            card.tagName.map((tag) => (
              <span
                key={tag}
                className="border rounded-xl border-neutral-500 w-[60px] h-[18px] text-center leading-5 text-xs mr-6 px-2 text-zinc-50 font-hqRegular"
              >
                {tag}
              </span>
            ))}
        </li>
        <li>
          <p className="text-neutral-500 text-xs">{card.content}</p>
        </li>
        <li>
          {card.table && (
            <table className="w-[100%] mt-11">
              <tbody>
                {Object.entries(card.table).map(([key, value]) => (
                  <tr
                    className="border-b border-neutral-800 flex justify-between font-hqThin"
                    key={key}
                  >
                    <td className="text-neutral-500 text-xs font-hqThin ">
                      {key}
                    </td>
                    <td className="text-neutral-200 text-sm font-machinaRegular">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </li>
      </ul>
      {card.time && (
        <ul className="flex items-center mt-[30px] font-machinaRegular">
          <li style={{ color: "white" }} className="text-xs mr-6">
            <CiClock2 className="inline-block w-[16px] h-[16px] mr-1" />
            {card.time}
          </li>
          {card.courses && (
            <li style={{ color: "white" }} className="text-xs mr-6">
              <BsBook className="inline-block w-[16px] h-[16px] mr-1 " />
              {card.courses}
            </li>
          )}
          {card.process && (
            <li>
              <Process />
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Card;
