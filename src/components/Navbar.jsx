import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black w-full h-[70px] flex justify-around items-center">
      <h1 className="text-white font-bold text-[2rem] md:text-[3rem]">
        My Projects
      </h1>
      <p className="text-red-600 hidden sm:block font-bold text:[1rem] md:text-[1.5rem]">
        Click on the Project to view it live
      </p>
    </nav>
  );
};

export default Navbar;
