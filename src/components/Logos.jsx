import React from "react";

const Logos = () => {
  return (
    <div className="w-screen h-[50vh] bg-[#f4f5f7] flex justify-center items-center">
      <div className="m-2 p-2 h-[25vh] w-full sm:w-[120vh] bg-[#F4F5F7] flex justify-center items-center flex-wrap gap-4 shadow-md">
        <img
          src="public/image-9@2x.png"
          alt="images"
          className="w-[15vh] h-[15vh] sm:w-[20vh] sm:h-[20vh]"
        />
        <img
          src="public/image-10@2x.png"
          alt="images"
          className="w-[20vh] h-[15vh] sm:w-[30vh] sm:h-[20vh]"
        />
        <img
          src="public/image-11@2x.png"
          alt="images"
          className="w-[10vh] h-[10vh] sm:w-[15vh] sm:h-[15vh]"
        />
        <img
          src="public/image-12@2x.png"
          alt="images"
          className="w-[15vh] h-[15vh] sm:w-[20vh] sm:h-[20vh]"
        />
        <img
          src="public/image-13@2x.png"
          alt="images"
          className="w-[15vh] h-[15vh] sm:w-[20vh] sm:h-[20vh]"
        />
      </div>
    </div>
  );
};

export default Logos;
