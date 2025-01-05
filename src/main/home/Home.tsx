import { ChevronDown, GithubIcon, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import Stack from "./Stack";

type prop = {
  children: React.ReactNode;
};

const BackgroundLayout = ({ children }: prop) => {
  return (
    <div className="relative min-h-screen bg-dark">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('src/assets/bgsec1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay with blur - reduced opacity */}
        <div className="absolute inset-0 bg-[#161616]/90 ssm:bg-[#161616]/60 backdrop-blur-sm" />
      </div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="bg-[#161616] min-h-screen text-title">
      {/* first section */}
      <BackgroundLayout>
        <div className="relative h-screen p-body">
          <div className="absolute top-0 flex flex-col items-center">
            <span className="block bg-soft h-[130px] w-[2px]"></span>
            <ul className="mt-4 flex flex-col gap-6">
              <li className="rounded-full bg-white p-1 text-black">
                <a href="">
                  <Linkedin size="25px" fill="#000" />
                </a>
              </li>
              <li className="rounded-full bg-white p-1 text-black">
                <a href="">
                  <GithubIcon size="25px" fill="#000" />
                </a>
              </li>
              <li className="rounded-full bg-white p-1 text-black">
                <a href="">
                  <Twitter size="25px" fill="#000" />
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu */}
          <div
            className="flex flex-col gap-[0.35rem] absolute right-5 items-end h-max sm:hidden"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            <div className="bg-highlight w-[50px] h-[0.25rem] rounded"></div>
            <div className="bg-highlight w-[35px] h-[0.25rem] rounded"></div>
            <div className="bg-highlight w-[50px] h-[0.25rem] rounded"></div>
          </div>

          <nav className="flex justify-between font-heading ml-8 relative z-20">
            <h1 className="ssm:absolute ssm:left-1/2 ssm:-translate-x-[60%] ssm:whitespace-nowrap ssm:text-xl">
              <span className="font-bold">MY</span>{" "}
              <span className="text-soft">PORTFOLIO</span>
            </h1>
            <ul className="flex gap-4 cursor-pointer ssm:hidden">
              <li id="aboutme">
                <span className="text-highlight">&lt;</span>ABOUT ME
                <span className="text-highlight">&gt;</span>
              </li>
              <li>
                <span className="text-highlight">&lt;</span>STACK
                <span className="text-highlight">&gt;</span>
              </li>
              <li>
                <span className="text-highlight">&lt;</span>PROJECTS
                <span className="text-highlight">&gt;</span>
              </li>
              <li>
                <span className="text-highlight">&lt;</span>CONTACTS
                <span className="text-highlight">&gt;</span>
              </li>
            </ul>
          </nav>

          <div className="absolute top-[25%] left-[7.5rem] ssm:top-[50%] ssm:left-[2rem]">
            <h1 className="font-heading text-6xl ssm:text-4xl">
              <span className="text-highlight">FRONT-END </span>
              <span className="h-1 w-[70px] ssm:w-[45px] bg-title block"></span>
              <span className="ml-[9rem] ssm:ml-[5rem]">DEVELOPER</span>
            </h1>
            <p className="text-lg font-body text-title mt-8 text-right w-[60%] ssm:text-sm ssm:text-center ssm:w-[90%]">
              I'm a passionate, dedicated, and creative front-end developer with
              a keen eye for design and a strong foundation in HTML, CSS, and
              JavaScript.
            </p>
          </div>

          <div className="absolute bottom-40 left-1/2 -translate-x-1/2 text-highlight flex flex-col animate-bounce ssm:bottom-10 ssm:left-[40%]">
            <ChevronDown size={80} strokeWidth={2.25} />
            <ChevronDown
              size={80}
              strokeWidth={2.25}
              className="absolute top-8"
            />
          </div>
        </div>
      </BackgroundLayout>

      {/* second section */}
      <Stack/>

      {/* third section */}
      <div className="h-screen">
        <h1 className="font-heading text-3xl text-center flex justify-center items-center flex-col">
          <span className="text-5xl">About me</span>
          <div className="h-1 w-[70px] block bg-highlight rounded"></div>
        </h1>
        <div className="flex justify-center text-soft/90">
          <div className="text-lg mt-4 w-1/2">
            I am a skilled frontend developer with 3 years of professional
            experience in crafting intuitive and user-friendly web interfaces.
            My expertise spans modern web technologies, including HTML, CSS,
            JavaScript, TypeScript, React.js, and Tailwind CSS.
            <br />
            <br /> I am also proficient in leveraging Shadcn UI to create
            dynamic, accessible, and visually appealing components that enhance
            user experiences. With a strong eye for detail and a passion for
            clean, maintainable code, I take pride in building web applications
            that are both functional and aesthetically pleasing.
            <br />
            <br />
            My goal is to continue growing as a developer, contributing to
            impactful projects, and staying at the forefront of web development
            trends.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
