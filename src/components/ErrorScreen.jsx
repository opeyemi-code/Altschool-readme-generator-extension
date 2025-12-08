import React from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
import { IoReload } from "react-icons/io5";

const ErrorScreen = () => {
  return (
    <div className="bg-white flex flex-col h-screen">
      <header className="flex justify-center bg-linear-[90deg,#2563EB,#9333EA] px-2 py-5 relative">
        <h1 className="flex items-center gap-2 text-sm text-white font-semibold">
          <IoDocumentTextSharp className="text-xl" />
          Altschool README Generator
        </h1>
        <span className="bg-[#FEF2F2] py-5 px-5 rounded-full absolute top-11">
          <IoIosWarning className="text-[#F87171] text-3xl" />
        </span>
      </header>
      <main className="px-8 py-3 h-full flex-1 flex flex-col justify-center items-center gap-2">
        <h2 className="text-[#EF4444] text-[1.125rem] font-semibold">
          Unable to scrape this page
        </h2>
        <p className="text-sm text-[#6B7280] text-center w-[80%] leading-[23px]">
          This page doesn't contain the expected content structure for README
          generation.
        </p>
        <button className="mt-6 flex gap-2 items-center justify-center bg-linear-[90deg,#3B82F6_0%,#9333EA_100%] text-white font-medium text-[1rem] w-full py-4 rounded-lg">
          <IoReload />
          Retry Scraping
        </button>
        <p className="text-[#9CA3AF] text-[0.75rem] mt-3">
          Make sure you're on a valid LMS course page
        </p>
      </main>
    </div>
  );
};

export default ErrorScreen;
