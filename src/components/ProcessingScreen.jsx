import React from "react";

const ProcessingScreen = () => {
  return (
    <div className="p-4">
      <header className="border-b border-[#E5E7EB] pb-6">
        <h1 className="text-[#1F2937] text-center text-[28px] font-semibold">
          Generating README...
        </h1>
      </header>
      <main className="flex flex-col pt-12 gap-12 h-full text-center">
        <h2 className="text-[#4B5563] font-medium text-sm">
          Processing and contacting AI
          <span className="animate-ping">.</span>
          <span className="animate-ping">.</span>
          <span className="animate-ping">.</span>
        </h2>
        <p className="text-[#9CA3AF] text-[0.75rem]">
          Altschool README Generator
        </p>
      </main>
    </div>
  );
};

export default ProcessingScreen;
