import React from "react";

const Project = ({ project, num }) => {
  const { name, img, liveUrl } = project;
  return (
    <a href={liveUrl} target="blank">
      <div className="project group relative border-black border-b-[2px] mb-[10px] cursor-pointer">
        <p className="absolute left-[5px] top-[-8%] sm:top-[-1%] text-[1.3rem] font-bold text-red-900">
          00{num}
        </p>
        <h1 className="font-extrabold text-[3.5rem] pt-[15px] sm:pt-0 leading-[70px] sm:leading-normal md:text-[6rem] hover:text-[wheat] duration-500 ">
          {name}
        </h1>
        <div className="absolute z-50 w-[700px] h-[300px] opacity-0 sm:group-hover:opacity-100 duration-500 right-[50px] top-[-50px]">
          <img className="w-full h-full object-contain" src={img} alt={name} />
        </div>
      </div>
    </a>
  );
};

export default Project;
