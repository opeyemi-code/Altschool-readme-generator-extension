import React from "react";
import { FaHashtag } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { BsDot } from "react-icons/bs";

const GeneratedReadMe = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-lg py-2 px-3 border border-[#E5E7EB]">
      <h2 className="flex items-center gap-1 text-[#111827] font-bold text-[24px]">
        <FaHashtag className="text-[#9CA3AF]" />
        Assignment Title
      </h2>
      <h3 className="mt-3 flex items-center gap-2 text-[#1F2937] text-[1.125rem] font-semibold">
        <FaBook className="text-[#9CA3AF]" />
        Description
      </h3>
      <p className="text-[#374151] text-sm leading-6 mt-3">
        This project demonstrates a comprehensive solution to the assignment
        requirements. It includes all necessary components and follows best
        practices for code organization and documentation.
      </p>
      <h3 className="flex items-center gap-2 my-2 text-[#1F2937] text-sm font-semibold text-[18px]">
        <MdFormatListBulleted className="text-[#9CA3AF]" />
        Features
      </h3>
      <p className="flex items-center text-[#374151] text-sm gap-2">
        {/* <BsDot className="text-green-600 text-[24px]" /> */}
        <span className="before:content-[' '] before:bg-green-600 before:h-9 before:w-6"></span>
        Clean and maintainable code structure
      </p>
    </div>
  );
};

export default GeneratedReadMe;
