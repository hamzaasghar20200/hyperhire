import Image from "next/image";
import React from "react";

interface TooltipProp {
  message: string;
  color: string;
  position: "top" | "bottom" | "left" | "right"; // Control accepted positions
  icon?: string;
  customClass?: string;
  animation?: string;
}

export const Tooltip: React.FC<TooltipProp> = ({
  message,
  color,
  position,
  icon,
  customClass,
  animation = "animate-slideUp",
}) => {
  const tooltipPosition = {
    top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
    left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
    right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
  };

  return (
    <div className={`${customClass} relative inline-block`}>
      <div
        className={`absolute ${tooltipPosition[position]} flex items-center gap-2 w-[170px] bg-white text-${color} font-bold text-center py-2 px-4 z-10 rounded-lg ${animation}`}
        style={{ color }}
      >
        {icon && (
          <Image
            src={icon}
            width={24}
            height={24}
            alt="tooltip-icon"
            className="tooltip-icon"
          />
        )}{" "}
        {message}
      </div>
      <div
        className={animation}
        style={{
          zIndex: -1,
        }}
      >
        <div
          className={`absolute w-4 h-4 bg-white transform rotate-45`}
          style={{
            [position]: "-21px", // Dynamic positioning for tooltip pointer
            zIndex: -1,
            left: "20px",
          }}
        ></div>
      </div>
    </div>
  );
};
