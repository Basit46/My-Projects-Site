import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import projectList from "./components/projectlist";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-green-800">
      <Navbar />
      <div className="projects px-[10px] md:px-[50px] py-[5px] md:py-[20px]">
        {projectList.map((project, index) => (
          <Project project={project} num={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
