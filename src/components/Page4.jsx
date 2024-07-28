import React from "react";
import Comp from "./Comp";

const Page4 = () => {
  return (
    <div className="w-full min-h-screen bg-[#f4f5f7]">
      <div className="flex items-center justify-center">
        <div className="m-4 p-4 flex items-center justify-center w-full sm:w-[450px] text-center">
          <h1 className="m-6 p-6 font-bold text-3xl sm:text-4xl lg:text-6xl leading-8 bg-[#00FEFE]">
            Offerings
          </h1>
        </div>
      </div>
      <Comp />
    </div>
  );
};

export default Page4;
