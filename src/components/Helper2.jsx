import React from "react";

const Card = ({ icon, title }) => (
  <div className="flex flex-row items-center w-full sm:w-[500px]">
    {icon}
    <div className="rounded-2xl shadow-md p-4 sm:p-6 m-2 sm:m-4 rounded-b-3xl border border-b-8 border-black">
      <h3 className="text-lg sm:text-2xl font-bold">{title}</h3>
    </div>
  </div>
);

const Helper2 = () => (
  <div className="container mx-auto my-4 px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 ">
      <Card
        icon={
          <img
            src="public/24hourssupport-1-1@2x.png"
            alt="Support"
            className="w-12 sm:w-16 h-12 sm:h-16"
          />
        }
        title="24×7 Innovation hub"
      />
      <Card
        icon={
          <img
            src="public/24hourssupport-1-1@2x.png"
            alt="Brainstorm"
            className="w-12 sm:w-16 h-12 sm:h-16"
          />
        }
        title="Brainstorming with dedicated EIR"
      />
      <Card
        icon={
          <img
            src="public/24hourssupport-1-1@2x.png"
            alt="Teamwork"
            className="w-12 sm:w-16 h-12 sm:h-16"
          />
        }
        title="Upto $250k investment opportunity"
      />
      <Card
        icon={
          <img
            src="public/24hourssupport-1-1@2x.png"
            alt="Discussion"
            className="w-12 sm:w-16 h-12 sm:h-16"
          />
        }
        title="Free access to shared resources for tech and marketing"
      />
    </div>
  </div>
);

export default Helper2;
