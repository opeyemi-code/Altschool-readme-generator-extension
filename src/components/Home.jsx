import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import CallToAction from "./CallToAction";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { BsDot } from "react-icons/bs";

const Home = () => {
  return (
    <div className="p-4 flex flex-col justify-between h-full">
      <header className="border-b border-b-slate-300 pb-6">
        <h1 className="flex justify-center items-center gap-2 text-xl font-bold ">
          <span className="bg-linear-[-43deg,#6366F1_0%,#9333EA_100%] p-2 rounded-lg">
            <IoDocumentTextOutline className="text-white" />
          </span>{" "}
          Altschool README Generator
        </h1>
      </header>
      <main className="py-12">
        <CallToAction />
        <p className="text-[#64748B] text-[12px] pt-8 flex items-center gap-2">
          <RiErrorWarningFill />
          Please ensure you're on an LMS page before proceeding.
        </p>
      </main>
      <footer className="flex justify-between items-center border-t border-t-[#E2E8F0] py-4">
        <p className="flex items-center text-[#64748B] text-[0.75rem]">
          <BsDot className="text-green-600 text-[24px]" />
          Extension Active
        </p>
        <IoIosSettings className="text-[#64748B] text-[16px]" />
      </footer>
    </div>
  );
};

export default Home;
