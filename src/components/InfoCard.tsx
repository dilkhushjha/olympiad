import React from "react";
import { twMerge } from "tailwind-merge";

const InfoCard = ({
  data,
  bgColor = "#FFFFFF",
  circleColor = "#EDF4FD",
}: {
  data: {
    id: number;
    title: string;
    text: string;
    icon: React.ReactNode;
  };
  bgColor?: string;
  circleColor?: string;
}) => {
  return (
    <div
      key={data.id}
      className={twMerge(
        "flex flex-col border rounded-3xl overflow-hidden justify-between min-h-[280px]",
        bgColor
      )}
    >
      <div className="p-8 pb-0 min-h-[280px] relative">
        <h6 className="text-xl font-bold h-[70px] leading-[1]">{data.title}</h6>
        <p className="text-sm font-medium">{data.text}</p>
        {/* <div className="absolute right-0 bottom-0" dangerouslySetInnerHTML={{ __html: data.icon }} ></div> */}
        <div
          className={twMerge(
            "absolute right-0 bottom-0 h-[171px] w-[171px] top-[194px] left-[264px] rounded-full",
            circleColor
          )}
        ></div>

        {data.icon && (
          <div className="absolute right-0 bottom-0 top-[176px] left-[264px]">
            {data.icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
