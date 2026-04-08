import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import isUrl from "is-url";

export type ProjectLink = {
  label: string;
  url: string;
  kind: string;
};

export type Project = {
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  keyFeatures?: string[];
  impact: string[];
  techStack: string[];
  demoPicSrc: string;
  demoPicAlt: string;
  frameworks: string[];
  links: ProjectLink[];
};

interface IProjectsProps {
  id: string;
  projects: Project[];
}

const Projects = ({ id, projects }: IProjectsProps) => {
  return (
    <div id={id} className="scroll-mt-10">
      <h2 className="font-bold text-3xl mt-8 mb-20 flex justify-center titles text-[#0c0d2e] dark:text-orange-400">
        Projects
      </h2>
      <div className="mx-4 lg:mx-20 grid grid-cols-1 xl:grid-cols-[46%_auto]">
        {projects &&
          projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start md:flex-row md:justify-start mb-10">
              <div className="w-[280px] h-[285px] overflow-hidden rounded-md mb-2 md:mr-10 shrink-0">
                <Image
                  src={`${project.demoPicSrc}`}
                  width={280}
                  height={285}
                  alt={project.demoPicAlt}
                  className="w-full h-full object-cover hover:transition-all hover:scale-110 hover:ease-in-out hover:duration-500"
                />
              </div>
              <div className="w-fit md:max-w-[50%]">
                <h2 className="font-bold text-xl mb-4 projects mt-1 sm:mt-0 text-[#0c0d2e] dark:text-orange-400">
                  {project.name}
                  <span className="font-medium text-lg text-black/70 dark:text-white/70">
                    {" - "}
                    {project.tagline}
                  </span>
                </h2>
                <div className="space-y-3 mr-1 text-black/80 dark:text-white/80">
                  <div>
                    <h3 className="font-semibold text-[#0c0d2e] dark:text-orange-300">
                      The Problem
                    </h3>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0c0d2e] dark:text-orange-300">
                      The Solution
                    </h3>
                    <p>{project.solution}</p>
                  </div>
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-[#0c0d2e] dark:text-orange-300">
                        Key Features
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {project.keyFeatures.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-[#0c0d2e] dark:text-orange-300">
                      Impact
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.impact.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0c0d2e] dark:text-orange-300 mb-1">
                      Tech Stack
                    </h3>
                    <p>{project.techStack.join(" • ")}</p>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap mb-3 mt-3">
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
                  {project.frameworks.includes("TbBrandPrisma") && (
                    <TbBrandPrisma size={30} className="text-black ml-1" />
                  )}
                  {project.frameworks.includes("SiPostgresql") && (
                    <SiPostgresql size={30} className="text-sky-700 ml-1" />
                  )}
                  {project.frameworks.includes("FaNodeJs") && (
                    <FaNodeJs size={30} className="text-[#68a063] ml-1" />
                  )}
                  {project.frameworks.includes("BsDiscord") && (
                    <BsDiscord size={30} className="text-cyan-600 ml-1" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-[#0c0d2e] dark:text-orange-300 mb-2">
                    Links
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => {
                      const isValidUrl = isUrl(link.url);

                      return isValidUrl ? (
                        <a
                          key={`${project.name}-${link.label}`}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer mr-1 bg-[#0c0d2e] dark:bg-[#2F3F57] text-orange-300 dark:text-white/80 hover:underline flex flex-row w-fit rounded-md py-0.5 px-1">
                          {link.label}
                          {link.kind === "github" ? (
                            <BsGithub className="ml-1 mt-0.5 text-orange-300" />
                          ) : (
                            <FiArrowUpRight
                              className="ml-1 mt-0.5 text-orange-300"
                              size={18}
                            />
                          )}
                        </a>
                      ) : (
                        <span
                          key={`${project.name}-${link.label}`}
                          className="cursor-not-allowed mr-1 bg-[#0c0d2e]/70 dark:bg-[#2F3F57]/70 dark:text-white/80 text-orange-300/90 flex flex-row w-fit rounded-md py-0.5 px-1">
                          {link.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
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
