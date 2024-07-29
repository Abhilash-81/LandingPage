import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="m-2 flex flex-wrap rounded-lg justify-between items-center bg-[#2E2929] text-white">
      <div className="h-[15vh] w-[20vw]">
        <img
          src="/public/screenshot-20240523-at-1157-2@2x.png"
          alt="Logo"
          className="h-[15vh] w-[20vw]"
        />
      </div>
      <div className="lg:hidden lg:m-2 p-2">
        <button onClick={toggleMenu} className="text-white">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row lg:items-center lg:justify-between space-x-2 font-semibold self-center whitespace-nowrap w-full lg:w-auto lg:p-2`}
      >
        <h4 className="m-4 p-4">Lorem</h4>
        <h4 className="m-4 p-4">Lorem</h4>
        <h4 className="m-4 p-4">Lorem</h4>
        <h4 className="m-4 p-4">Lorem</h4>
        <h4 className="mx-4 px-4 my-2 py-1 border bg-white text-black rounded-lg">
          Lorem
        </h4>
      </div>
    </nav>
  );
};

export default Navbar;
