import React from "react";

const LevelUI = () => {
  return (
  <div>
    {
        
    }
  </div>
  )
};

const Stack = () => {
  return (
    <div className="h-screen text-soft/90 p-body font-body">
      <h1 className="font-heading text-3xl text-center flex justify-center items-center flex-col text-title">
        <span className="text-5xl">Stack</span>
        <div className="h-1 w-[70px] block bg-highlight rounded"></div>
      </h1>
      <div className="grid grid-cols-4 gap-4 mt-8 relative">
        <div className="h-56 p-2 col-span-3 relative">
          <div className="bg-title w-24 h-[0.2rem] absolute left-0"></div>
          <div className="bg-title w-[0.2rem] h-24 absolute left-0"></div>
          <div className="bg-title w-[0.2rem] h-24 absolute bottom-0 right-0"></div>
          <div className="bg-title w-24 h-[0.2rem] absolute bottom-0 right-0"></div>
          <div className="p-8 text-xl">
            I specialize in building responsive, dynamic, and visually appealing
            web applications using a variety of modern tools and technologies.
          </div>
        </div>
        <div className="h-56 p-2 border-[3px] border-title">
          <h1 className="text-highlight text-3xl font-medium">HTML/CSS</h1>
          <LevelUI />
        </div>
        <div className="h-56 p-2 border-[3px] border-title">
          <h1 className="text-highlight text-3xl font-medium">JAVASCRIPT</h1>
        </div>
        <div className="h-56 p-2 border-[3px] border-title">
          <h1 className="text-highlight text-3xl font-medium">REACTJS</h1>
        </div>
        <div className="h-56 p-2 border-[3px] border-title">
          <h1 className="text-highlight text-3xl font-medium">TYPESCRIPT</h1>
        </div>
        <div className="h-56 p-2 border-[3px] border-title">
          <h1 className="text-highlight text-3xl font-medium">PYTHON</h1>
        </div>
      </div>
    </div>
  );
};

export default Stack;
