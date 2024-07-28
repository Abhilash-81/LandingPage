import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-800 text-white py-16 px-8">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Pedal Circle</h1>
          <p className="text-lg w-[30vw]">
            PedalCircle is an innovation hub by PedalStart for selected
            early-stage startups to accelerate the journey in 4 months and build
            them seed-stage investable.
          </p>
        </div>

        <div className="md:text-right mt-8 md:mt-0 w-[15vw] flex flex-col items-start justify-start">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">
            <a href="tel:+919650346002" className="underline">
              +91 9650346002
            </a>
          </p>
          <p className="mb-2">
            <a href="mailto:connect@pedalstart.com" className="underline">
              connect@pedalstart.com
            </a>
          </p>
          <p className="text-left">
            SpringHouse Coworking, Grand Mall, Sikandarpur, Gurgaon, Haryana
            122004, IN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
