import { useState, useEffect } from "react";
import npmSticker from "../../assets/npm.jpg";
import git from "../../assets/git.png";
import github from "../../assets/github.jpg";
import chromdev from "../../assets/Chrome DevTools Icon.png";
import reduxImg from "../../assets/Redux (1).svg";
import vite from "../../assets/vite.svg";

type LevelUIProps = {
  length: number;
  label: string;
};

type childrenProp = {
  children: React.ReactNode;
  className: string;
}



const LevelUI: React.FC<LevelUIProps> = ({ length, label }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-highlight text-3xl font-medium ssm:text-2xl sssm:text-xl">
        {label}
      </h1>
      <div>
        <div className="flex space-x-3 mb-6 absolute">
          {[...Array(length)].map((_, index) => (
            <div
              key={index}
              className={`h-[3.5rem] w-[1rem] bg-highlight transform transition-all duration-700 delay-${
                index * 100
              } ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}
              style={{
                transformOrigin: 'bottom',
                transitionDelay: `${index * 0.1}s`
              }}
            ></div>
          ))}
        </div>
        <div className="flex space-x-3 mb-6">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="h-[3.5rem] w-[1rem] border border-soft/30"
            ></div>
          ))}
        </div>
      </div>
      <span className="text-title text-end font-mono">{length}0%</span>
    </div>
  );
};

const BorderBox = ({ children, className=""}:childrenProp) => (
  <div className={`relative p-4`}>
    <div className="absolute top-0 left-0 w-24 h-[0.2rem] bg-title transform origin-left transition-transform duration-500 hover:scale-x-150"></div>
    <div className="absolute top-0 left-0 w-[0.2rem] h-24 bg-title transform origin-top transition-transform duration-500 hover:scale-y-150"></div>
    <div className="absolute bottom-0 right-0 w-24 h-[0.2rem] bg-title transform origin-right transition-transform duration-500 hover:scale-x-150"></div>
    <div className="absolute bottom-0 right-0 w-[0.2rem] h-24 bg-title transform origin-bottom transition-transform duration-500 hover:scale-y-150"></div>
    {children}
  </div>
);

const ToolIcon = ({ img, alt }:any) => (
  <div className="group relative transform transition-transform duration-300 hover:scale-110">
    <img
      src={img}
      alt={alt}
      className="w-20 h-20 rounded-full ssm:w-12 ssm:h-12 sssm:w-8 sssm:h-8 object-contain 
                 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-highlight/20"
    />
    <div className="absolute inset-0 rounded-full bg-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

const Stack = () => {
  const skills = [
    { label: "HTML/CSS", level: 9 },
    { label: "JAVASCRIPT", level: 7 },
    { label: "REACTJS", level: 7 },
    { label: "TYPESCRIPT", level: 7 },
    { label: "PYTHON", level: 5 }
  ];

  const tools = [
    { img: npmSticker, alt: "NPM" },
    { img: git, alt: "Git" },
    { img: github, alt: "GitHub" },
    { img: vite, alt: "Vite" },
    { img: reduxImg, alt: "Redux" },
    { img: chromdev, alt: "Chrome DevTools" }
  ];

  return (
    <div className="min-h-screen text-soft/90 p-body font-body">
      <h2 className="text-5xl font-heading font-bold mb-12 text-center text-title transform transition-all duration-500 hover:scale-105">
        <span className="text-highlight">&lt;</span>
        Stack
        <span className="text-highlight">&gt;</span>
      </h2>

      <div className="grid grid-cols-4 gap-4 xxl:gap-3 gap-y-10 mt-8 relative flex-wrap xxl:grid-cols-3 lgg:grid-cols-2 ssm:grid-cols-1">
        {/* Introduction Box */}
        <BorderBox className="h-56 col-span-3 xxl:col-span-2">
          <div className="p-8 text-xl ssm:text-lg sssm:text-base leading-relaxed">
            I specialize in building responsive, dynamic, and visually appealing
            web applications using a variety of modern tools and technologies.
          </div>
        </BorderBox>

        {/* Skill Boxes */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="h-56 border-[3px] border-title flex flex-col justify-between p-4 ssm:col-span-2
                     transform transition-all duration-500 hover:border-highlight hover:shadow-lg hover:shadow-highlight/20"
          >
            <LevelUI length={skill.level} label={skill.label} />
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <div className="mt-16">
        <h1 className="text-5xl text-center text-white font-heading mt-8 mb-12 transform transition-all duration-500 hover:scale-105">
          Tools
        </h1>
        <div className="flex gap-20 ssm:gap-10 sssm:gap-5 justify-evenly flex-wrap">
          {tools.map((tool, index) => (
            <ToolIcon key={index} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;