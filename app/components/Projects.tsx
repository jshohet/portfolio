import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const FRAMEWORK_ICONS: Record<string, React.ReactElement> = {
  BiLogoTypescript: <BiLogoTypescript size={30} className="text-cyan-400 ml-1" />,
  BiLogoTailwindCss: <BiLogoTailwindCss size={30} className="text-cyan-600 ml-1" />,
  TbBrandNextjs: <TbBrandNextjs size={30} className="text-black ml-1" />,
  TbBrandPrisma: <TbBrandPrisma size={30} className="text-black ml-1" />,
  SiPostgresql: <SiPostgresql size={30} className="text-sky-700 ml-1" />,
  FaNodeJs: <FaNodeJs size={30} className="text-[#68a063] ml-1" />,
  BsDiscord: <BsDiscord size={30} className="text-cyan-600 ml-1" />,
};

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
      <div className="mx-4 lg:mx-20 grid grid-cols-1 xl:grid-cols-2 gap-10">
        {projects &&
          projects.map((project, idx) => (
            <div key={idx} className="flex flex-col mb-4">
              <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-md mb-5">
                <Image
                  src={project.demoPicSrc}
                  width={800}
                  height={500}
                  alt={project.demoPicAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-all ease-in-out duration-500"
                />
              </div>
              <div>
                <h2 className="font-bold text-xl mb-3 projects text-[#0c0d2e] dark:text-orange-400">
                  {project.name}
                  <span className="font-medium text-lg text-black/70 dark:text-white/70">
                    {" - "}
                    {project.tagline}
                  </span>
                </h2>
                <div className="space-y-3 text-black/80 dark:text-white/80">
                  <p>{project.problem} {project.solution}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-black/60 dark:text-white/60">
                    {project.techStack.join(" • ")}
                  </p>
                </div>
                <div className="flex flex-row flex-wrap mb-3 mt-3">
                  {project.frameworks.map((key) =>
                    FRAMEWORK_ICONS[key] ? (
                      <span key={key}>{FRAMEWORK_ICONS[key]}</span>
                    ) : null
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => {
                    const isValidUrl = link.url.startsWith("http");
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
          ))}
      </div>
    </div>
  );
};

export default Projects;
