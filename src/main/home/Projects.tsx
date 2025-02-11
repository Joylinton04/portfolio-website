import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

interface prop {
  project: {
    title: string;
    description: string;
    link: string;
    Stack: string;
  };
}

type childrenProp = {
  children: React.ReactNode;
};

const ProjectCard = ({ project }: prop) => {
  return (
    <Link
      to={project.link}
      className="w-96 ssm:w-full p-6 border-2 border-gray-800 hover:border-highlight bg-black/20 rounded-lg backdrop-blur-sm flex flex-col justify-between gap-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-highlight/20"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="space-y-4">
        <h1 className="text-xl font-heading flex justify-between items-center group-hover:text-highlight transition-colors">
          {project.title}
          <span className="text-highlight transform transition-transform duration-300 group-hover:translate-x-1">
            <ExternalLink size={20} />
          </span>
        </h1>

        <p className="text-soft text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.Stack.split(",").map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-highlight/10 text-highlight border border-highlight/20"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Telemedicine",
      description:
        "Telemedicine is a remote health care delivery website. It is another showcase of my skill in building complex and stunning user-friendly interfaces for health personnels and patients",
      link: "https://telemedicine-delta.vercel.app/",
      Stack: "ReactJS, JavaScript, TypeScript, TailwindCSS, Redux",
    },
    {
      title: "The Foodie Hub",
      description:
        "Foodie Hub is a restaurant website designed to showcase a variety of meals with an eye-catching and user-friendly interface.",
      link: "https://the-foodie-hub.vercel.app",
      Stack: "ReactJS, JavaScript, TypeScript, TailwindCSS",
    },
    {
      title: "Blog Blound",
      description:
        "This blog web app offers a full suite of features essential for any blog platform, allowing users to create, read, update, and delete posts. It is designed to provide a smooth and user-friendly experience.",
      link: "https://blog-blound.vercel.app/",
      Stack: "ReactJS, JavaScript, TypeScript, TailwindCSS, Redux",
    },
    {
      title: "Trackify",
      description:
        "Trackify is a budgeting application that enables users to manage their finances by adding and tracking both income and expenses.",
      link: "https://trackify-three.vercel.app",
      Stack: "ReactJS, JavaScript, TypeScript, TailwindCSS, Redux",
    },
    {
      title: "Digital Agency Website",
      description: "A complete digital agency website",
      link: "https://digital-agency-company-six.vercel.app",
      Stack: "ReactJS, JavaScript, TypeScript, TailwindCSS",
    },
    {
      title: "",
      description: "Reference my github repository for more information",
      link: "https://github.com/Joylinton04",
      Stack: "",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold mb-12 text-center ssm:text-4xl">
          <span className="text-highlight">&lt;</span>
          Featured Projects
          <span className="text-highlight">&gt;</span>
        </h2>

        <div className="flex gap-6 flex-wrap justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
