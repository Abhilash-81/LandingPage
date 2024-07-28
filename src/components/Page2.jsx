import React from "react";
import Helper2 from "./Helper2";

const Page2 = () => {
  return (
    <div className="w-screen h-screen bg-[#f4f5f7]">
      <div className="flex flex-col items-center justify-between">
        <h1 className="m-2 p-2 sm:text-xl md:text-5xl lg:text-6xl">About</h1>
        <div className="bg-[#00FEFE] m-4 p-4 md:m-8 md:p-8 lg:m-12 lg:p-12">
          <h1 className="font-bold sm:text-xl md:text-5xl lg:text-6xl">
            PedalCircle
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-1.0 m-8 p-8 font-bold text-xl tracking-wide">
        PedalCircle is an innovation hub by PedalStart for selected early-stage
        startups to <br /> accelerate the journey in 4 months and build them
        seed-stage investable. 
      </div>
      <Helper2 />
    </div>
  );
};

export default Page2;
