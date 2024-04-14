import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi/";
import { BsGithub } from "react-icons/bs/";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
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
      <h1 className="font-bold text-3xl mt-8 mb-20 flex justify-center titles text-[#0c0d2e] dark:text-orange-400">
        Projects
      </h1>
      <div className="mx-4 lg:mx-20 grid grid-cols-1 xl:grid-cols-[45%_auto]">
        {projects &&
          projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start md:flex-row md:justify-start mb-10">
              <Image
                src={`${project.demoPicSrc}`}
                width={280}
                height={285}
                alt={project.demoPicAlt}
                className="hover:transition-all md:w-200 hover:scale-110 hover:ease-in-out hover:duration-500 md:mr-10 rounded-md mb-2"
              />
              <div className="w-fit md:max-w-[50%]">
                <h2 className="font-bold text-xl mb-4 projects mt-1 sm:mt-0 text-[#0c0d2e] dark:text-orange-400">
                  {project.name}
                </h2>
                <p className="mb-2 mr-1 text-black/80 dark:text-white/80">
                  {project.description}
                </p>
                <div className="flex flex-row mb-2">
                  {project.frameworks.includes("BiLogoTypescript") && (
                    <BiLogoTypescript
                      size={30}
                      className="text-cyan-400 ml-1"
                    />
                  )}
                  {project.frameworks.includes("BiLogoTailwindCss") && (
                    <BiLogoTailwindCss
                      size={30}
                      className="text-cyan-600 ml-1"
                    />
                  )}
                  {project.frameworks.includes("TbBrandNextjs") && (
                    <TbBrandNextjs size={30} className="text-black ml-1" />
                  )}
                  {project.frameworks.includes("FaNodeJs") && (
                    <FaNodeJs size={30} className="text-[#68a063] ml-1" />
                  )}
                  {project.frameworks.includes("BsDiscord") && (
                    <BsDiscord size={30} className="text-cyan-600 ml-1" />
                  )}
                </div>
                <a
                  href={project.demoURL}
                  className={`${
                    isUrl(project.demoURL)
                      ? " cursor-pointer bg-[#0c0d2e] dark:bg-[#2F3F57] text-orange-300 dark:text-white/80 hover:underline"
                      : " cursor-not-allowed bg-[#0c0d2e]/70 dark:bg-[#2F3F57]/70 dark:text-white/80 text-orange-300/90"
                  } flex flex-row mb-1  w-fit rounded-md py-0.5 px-1 mr-4`}>
                  {project.demoURLText}
                  {isUrl(project.demoURL) && (
                    <FiArrowUpRight
                      className="ml-1 mt-0.5 text-orange-300"
                      size={18}
                    />
                  )}
                </a>
                {project.githubLinkText && (
                  <a
                    href={project.githubURL}
                    className="cursor-pointer flex flex-row mb-1 hover:underline dark:text-white/80 bg-[#0c0d2e] dark:bg-[#2F3F57] text-orange-300 w-fit rounded-md py-0.5 px-1"
                    target="_blank">
                    {project.githubLinkText}
                    <BsGithub className="ml-1 mt-0.5 text-orange-300" />
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
