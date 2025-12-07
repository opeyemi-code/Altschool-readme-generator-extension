import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import GeneratedReadMe from "./GeneratedReadMe";
import { FaCopy } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const GeneratedReadMeScreen = () => {
  return (
    <div className="p-4 h-full">
      <header className="py-3 flex flex-col items-center gap-1 border-b border-b-[#E5E7EB]">
        <span className="bg-green-100 py-3 px-3 rounded-full">
          <IoMdCheckmark className="text-green-600" />
        </span>
        <h1 className="text-[#111827] text-[24px] font-bold">
          README.md Generated!
        </h1>
        <p className="text-[#6B7280] text-sm">Your documentation is ready</p>
      </header>
      <main className="py-6 h-full">
        <GeneratedReadMe />
        <div className="flex justify-between gap-2 py-4">
          <button
            type="button"
            className="bg-blue-600 text-white flex items-center justify-center gap-4 w-full h-18 p-3 rounded-lg font-medium"
          >
            <FaCopy />
            Copy <br /> Markdown
          </button>
          <button
            type="button"
            className="w-full bg-white flex items-center justify-center gap-2 p-3 h-18 border-2 border-[#D1D5DB] rounded-lg text-[1rem] font-medium"
          >
            <FaDownload />
            Download .md
          </button>
        </div>
      </main>
    </div>
  );
};

export default GeneratedReadMeScreen;
