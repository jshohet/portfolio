import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi/";
import { BsGithub } from "react-icons/bs/";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";
import { DiJqueryUiLogo } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import isUrl from "is-url";
type Icon = {
  icon: string;
};

type Project = {
  name: string;
  description: string;
  demoPicSrc: string;
  demoPicAlt: string;
  frameworks: string[];
  githubURL?: string;
  githubLinkText?: string;
  demoURL: string;
  demoURLText?: string;
};

interface IProjectsProps {
  id: string;
  projects: Project[];
}

const Projects = ({ id, projects }: IProjectsProps) => {
  
  return (
    <div id={id} className="scroll-mt-10">
      <h1 className="font-bold text-3xl my-8 text-center">Projects</h1>
      <div className="ml-8 grid grid-cols-1 xl:grid-cols-[45%_auto]">
        {projects &&
          projects.map((project, idx) => (
            <div key={idx} className="flex flex-col items-center md:flex-row md:justify-center mb-10">
              <Image
                src={`${project.demoPicSrc}`}
                width={320}
                height={300}
                alt={project.demoPicAlt}
                className="hover:transition-all hover:scale-110 hover:ease-in-out hover:duration-500 mr-10 rounded-md mb-2"
              />
              <div className="w-fit md:max-w-[50%]">
                <h2 className="font-bold text-xl mb-2">{project.name}</h2>
                <p className="mb-2 mr-1">{project.description}</p>
                <div className="flex flex-row mb-2">
                  {project.frameworks.includes("BiLogoTypescript") && (
                    <BiLogoTypescript size={30} className="text-cyan-400" />
                  )}
                  {project.frameworks.includes("BiLogoTailwindCss") && (
                    <BiLogoTailwindCss size={30} className="text-cyan-600" />
                  )}
                  {project.frameworks.includes("TbBrandNextjs") && (
                    <TbBrandNextjs size={30} className="text-black" />
                  )}
                  {project.frameworks.includes("FaNodeJs") && (
                    <FaNodeJs size={30} className="text-[#68a063]" />
                  )}
                  {project.frameworks.includes("BsDiscord") && (
                    <BsDiscord size={30} className="text-cyan-600" />
                  )}
                </div>
                <a
                  href={project.demoURL}
                  className={`${
                    isUrl(project.demoURL)
                      ? " cursor-pointer bg-slate-400 text-white"
                      : " cursor-not-allowed bg-slate-400/70 text-white/90"
                  } flex flex-row mb-1  w-fit rounded-md p-0.5`}>
                  {project.demoURLText}
                  <FiArrowUpRight
                    className="ml-1 mt-0.5 text-black"
                    size={18}
                  />
                </a>
                {project.githubLinkText && (
                  <a
                    href={project.githubURL}
                    className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5"
                    target="_blank">
                    {project.githubLinkText}
                    <BsGithub className="ml-1 mt-0.5 text-black" />
                  </a>
                )}
              </div>
            </div>
          ))}        
      </div>
      {/* <h1 className="font-bold text-3xl my-8 text-center">
        Simple JS/JQuery Projects
      </h1>
      <div className="ml-8">
        <div className="flex flex-col md:flex-row mb-10">
          <Image
            src="/img/skincaredemo.PNG"
            width={320}
            height={300}
            alt="Marina's skincare demo image"
            className="hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10 rounded-md mb-2"
          />
          <div className="w-fit md:max-w-[50%]">
            <h2 className="font-bold text-xl mb-2">Marina&#39;s Skincare</h2>
            <p className="mb-2 mr-1">
              Check out Marina&#39;s Skincare for all your skincare needs!
            </p>
            <div className="flex flex-row mb-2">
              <SiJavascript size={30} className="text-yellow-400" />
              <SiCss3 size={30} className="text-cyan-600" />
              <SiHtml5 size={30} className="text-red-400" />
              <DiJqueryUiLogo size={30} className="text-amber-500" />
            </div>
            <a
              href="https://josef-skincare.vercel.app/"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5">
              Try out this site{" "}
              <FiArrowUpRight className="ml-1 mt-0.5 text-black" size={18} />
            </a>
            <a
              href="https://github.com/jshohet/Skincare-Project"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5"
              target="_blank">
              Source code on github{" "}
              <BsGithub className="ml-1 mt-0.5 text-black" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-10">
          <Image
            src="/img/dogadoptiondemo.PNG"
            width={320}
            height={300}
            alt="Chew plush store demo image."
            className="hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10 rounded-md mb-2"
          />
          <div className="w-fit md:max-w-[50%]">
            <h2 className="font-bold text-xl mb-2">
              Bianca&#39;s Dog Adoption
            </h2>
            <p className="mb-2 mr-1">
              Rescue one of these cute little pups today at Bianca&#39;s Dog
              Adoption Agency.
            </p>
            <div className="flex flex-row mb-2">
              <SiJavascript size={30} className="text-yellow-400" />
              <SiCss3 size={30} className="text-cyan-600" />
              <SiHtml5 size={30} className="text-red-400" />
              <DiJqueryUiLogo size={30} className="text-amber-500" />
            </div>
            <a
              href="https://josef-dog-adoption.vercel.app/index.html"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5">
              Try out this site{" "}
              <FiArrowUpRight className="ml-1 mt-0.5 text-black" size={18} />
            </a>
            <a
              href="https://github.com/jshohet/dog-adoption"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5"
              target="_blank">
              Source code on github{" "}
              <BsGithub className="ml-1 mt-0.5 text-black" />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
