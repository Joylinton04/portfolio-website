import { ChevronDown, GithubIcon, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import Stack from "./Stack";
import Projects from "./Projects";

type Props = {
  children: React.ReactNode;
  pic: string;
};

type childrenProp = {
  children: React.ReactNode;
}

type socialLinksProp = {
  href: string;
  icon: React.FC<any>;
}

const SocialLink = ({ href, icon: Icon }:socialLinksProp) => (
  <li className="transform transition-all duration-300 hover:scale-110">
    <a 
      href={href}
      className="rounded-full bg-white p-2 text-black block hover:bg-highlight hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={25} fill="#000"/>
    </a>
  </li>
);

const NavItem = ({ children }:childrenProp) => (
  <li className="relative cursor-pointer group">
    <span className="text-highlight transition-opacity group-hover:opacity-100">&lt;</span>
    <span className="relative font-heading">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
    </span>
    <span className="text-highlight transition-opacity group-hover:opacity-100">&gt;</span>
  </li>
);

const BackgroundLayout = ({ children, pic }: Props) => {
  return (
    <div className="relative min-h-screen bg-dark transition-all duration-500">
      <div
        className="absolute inset-0 z-0 transition-opacity duration-700"
        style={{
          backgroundImage: pic,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#161616]/90 ssm:bg-[#161616]/60 backdrop-blur-sm transition-all duration-500" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { href: "#", icon: Linkedin },
    { href: "#", icon: GithubIcon },
    { href: "#", icon: Twitter },
  ];

  const navItems = ["ABOUT ME", "STACK", "PROJECTS", "CONTACTS"];

  return (
    <div className="bg-[#161616] min-h-screen text-title">
      <BackgroundLayout pic="url('src/assets/bgsec1.jpeg')">
        <div className="relative h-screen p-body">
          {/* Social Links */}
          <div className="absolute top-0 flex flex-col items-center z-20">
            <span className="block bg-soft h-[130px] w-[2px] animate-heightGrow"></span>
            <ul className="mt-4 flex flex-col gap-6">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex flex-col gap-[0.35rem] absolute right-5 items-end h-max sm:hidden z-30"
            onClick={() => setToggleMenu(prev => !prev)}
            aria-label="Toggle Menu"
          >
            <div className={`bg-highlight h-[0.25rem] rounded transition-all duration-300 ${toggleMenu ? 'w-[50px] rotate-45 translate-y-2' : 'w-[50px]'}`}></div>
            <div className={`bg-highlight w-[35px] h-[0.25rem] rounded transition-opacity ${toggleMenu ? 'opacity-0' : ''}`}></div>
            <div className={`bg-highlight h-[0.25rem] rounded transition-all duration-300 ${toggleMenu ? 'w-[50px] -rotate-45 -translate-y-2' : 'w-[50px]'}`}></div>
          </button>

          {/* Mobile Menu */}
          {toggleMenu && (
            <div className="fixed inset-0 bg-dark/95 z-20 sm:hidden">
              <ul className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
                {navItems.map((item) => (
                  <NavItem key={item}>{item}</NavItem>
                ))}
              </ul>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex justify-between font-heading ml-8 relative z-20">
            <h1 className="ssm:absolute ssm:left-1/2 ssm:-translate-x-[60%] ssm:whitespace-nowrap ssm:text-xl">
              <span className="font-bold">MY</span>{" "}
              <span className="text-soft">PORTFOLIO</span>
            </h1>
            <ul className="flex gap-4 cursor-pointer ssm:hidden">
              {navItems.map((item) => (
                <NavItem key={item}>{item}</NavItem>
              ))}
            </ul>
          </nav>

          {/* Hero Section */}
          <div className={`absolute top-[30%] left-[7.5rem] ssm:top-[50%] ssm:left-[2rem] transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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

          {/* Scroll Indicator */}
          <div className="absolute bottom-40 left-1/2 -translate-x-1/2 text-highlight flex flex-col animate-bounce ssm:bottom-10 ssm:left-[40%] cursor-pointer">
            <ChevronDown size={80} strokeWidth={2.25} />
            <ChevronDown size={80} strokeWidth={2.25} className="absolute top-8" />
          </div>
        </div>
      </BackgroundLayout>

      {/* About Section */}
      <BackgroundLayout pic="')">
        <Stack />
      </BackgroundLayout>

      {/* Projects Section */}
      <div className="mt-10 p-body">
        <div className="mt-10">
          <Projects />
        </div>
      </div>

      <div className="px-4">
          <h2 className="text-5xl font-heading font-bold mb-12 text-center text-title">
            <span className="text-highlight">&lt;</span>
            About me
            <span className="text-highlight">&gt;</span>
          </h2>
          <div className="flex justify-center text-soft/90 mt-10">
            <div className="prose prose-invert text-lg mt-4 w-1/2 ssm:w-[90%] leading-relaxed">
              <p className="mb-6">
                I am a skilled frontend developer with 3 years of professional
                experience in crafting intuitive and user-friendly web interfaces.
                My expertise spans modern web technologies, including HTML, CSS,
                JavaScript, TypeScript, React.js, and Tailwind CSS.
              </p>
              <p className="mb-6">
                I am also proficient in leveraging Shadcn UI to create
                dynamic, accessible, and visually appealing components that
                enhance user experiences. With a strong eye for detail and a
                passion for clean, maintainable code, I take pride in building web
                applications that are both functional and aesthetically pleasing.
              </p>
              <p>
                My goal is to continue growing as a developer, contributing to
                impactful projects, and staying at the forefront of web
                development trends.
              </p>
            </div>
          </div>
        </div>


        <div className="p-body">

        </div>
    </div>
  );
};

export default Home;