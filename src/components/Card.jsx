import React from "react";

const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-md p-6 m-4 w-full sm:w-[380px] sm:h-[330px] lg:h-[250px] lg:w[300px] rounded-xl relative flex flex-col">
      <div className="flex flex-col items-start mb-4">
        <h3 className="text-xl font-bold ml-4">{title}</h3>
        <p className="text-gray-700 opacity-50 font-normal sm:ml-2 sm:mr-4 lg:ml-4 lg:mr-10 text-sm sm:text-[11px] leading-4">
          {description}
        </p>
      </div>
      <div className="absolute bottom-4 right-4  bg-black rounded-full">
        <img
          src="public/24hourssupport-1@2x.png"
          alt="Image"
          className="object-contain h-[10vw] w-[10vw] lg:h-[3vw] lg:w-[3vw] "
        />
      </div>
    </div>
  );
};

export default Card;
