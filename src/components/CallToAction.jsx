import React, { useContext } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import DataContext from "./context/DataContext";

const CallToAction = () => {
  const { handleClick } = useContext(DataContext);

  return (
    <div className="bg-[#E2E8F0] rounded-sm flex flex-col items-center gap-3 py-7 border border-[#E5E7EB] shadow-2xs">
      <h2 className="text-[#475569] text-sm font-medium flex justify-center items-center gap-2">
        <span>
          <FaWandMagicSparkles className="text-[#4F46E5]" />
        </span>
        Ready to generate your README
      </h2>
      <button
        onClick={handleClick}
        type="button"
        className="bg-linear-[-90deg,#6366F1_0%,#9333EA_100%] px-6 py-5 rounded-lg text-white text-[1rem] font-semibold flex items-center h-20 gap-5 cursor-pointer hover:bg-linear-[-90deg,#6366F1_10%,#9333EA_80%]"
      >
        <GoQuestion className="text-white" />
        Scrape Assignment & <br /> Generate
      </button>
    </div>
  );
};

export default CallToAction;
