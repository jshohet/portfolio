import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiBootstrap, SiPostgresql, SiMongodb, SiRedux, SiJest, SiVercel } from "react-icons/si";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaFigma } from "react-icons/fa";
import { TbBrandNextjs, TbBrandPrisma, TbBrandCSharp } from "react-icons/tb";
import { BsDiscord } from "react-icons/bs";

const SKILL_ICONS: Record<string, React.ReactElement> = {
  HTML: <SiHtml5 className="mr-1 text-orange-500" />,
  CSS: <SiCss3 className="mr-1 text-blue-500" />,
  Javascript: <SiJavascript className="mr-1 text-yellow-400" />,
  TypeScript: <BiLogoTypescript className="mr-1 text-cyan-400" />,
  jQuery: <SiJquery className="mr-1 text-blue-400" />,
  TailwindCSS: <BiLogoTailwindCss className="mr-1 text-cyan-500" />,
  Bootstrap: <SiBootstrap className="mr-1 text-purple-500" />,
  React: <FaReact className="mr-1 text-cyan-400" />,
  "Next.js": <TbBrandNextjs className="mr-1" />,
  "Node.js": <FaNodeJs className="mr-1 text-[#68a063]" />,
  Prisma: <TbBrandPrisma className="mr-1" />,
  PostgreSQL: <SiPostgresql className="mr-1 text-sky-700" />,
  MongoDB: <SiMongodb className="mr-1 text-green-500" />,
  "C#": <TbBrandCSharp className="mr-1 text-purple-600" />,
  Git: <FaGitAlt className="mr-1 text-orange-600" />,
  Docker: <FaDocker className="mr-1 text-blue-500" />,
  Redux: <SiRedux className="mr-1 text-purple-500" />,
  "Discord.js": <BsDiscord className="mr-1 text-indigo-400" />,
  AWS: <FaAws className="mr-1 text-orange-400" />,
  Figma: <FaFigma className="mr-1 text-pink-500" />,
  Jest: <SiJest className="mr-1 text-red-500" />,
  Vercel: <SiVercel className="mr-1" />,
};

interface IAboutProps {
  id: string;
  currentlyExploring: string[];
  skills: string[];
}

const About = ({
  id,
  currentlyExploring,
  skills,
}: IAboutProps) => {
  return (
    <div className="mb-20 mt-10 scroll-mt-10" id={id}>
      <h2 className="font-bold text-3xl mt-8 mb-20 flex justify-center titles text-[#0c0d2e] dark:text-orange-400">
        About
      </h2>
      <div className=" lg:mx-20 grid grid-cols-1 lg:grid-cols-[45%_auto]">
        <div className="text-[#0c0d2e] dark:text-white/80 dark:bg-[#2F3F57] mb-2 bg-orange-300 h-fit  rounded-lg lg:mr-10 w-fit px-4 pt-1 pb-4 lg:ml-0 mx-2">
          <p className="indent-5 my-1 font-bold text-lg">
            I build software that makes operations cheaper, faster, and easier to run.
          </p>
          <p className="indent-5 mt-2">
            Full-stack developer with hands-on experience running $50K+/week
            operations. I build web applications that cut costs, reduce errors,
            and eliminate manual work, using React, Next.js, TypeScript,
            Node.js, Prisma, and PostgreSQL.
          </p>
          <p className="indent-5 mt-2">
            Recent projects include automation systems, a publishing platform,
            and a marketplace-style product with search and operations tooling.
          </p>
          <p className="indent-5 mt-2">
            Currently building full-stack products for teams that need
            reliable software and cleaner workflows.
          </p>
        </div>
        <div className="flex flex-col justify-evenly">
          <section className="flex flex-col lg:mx-0 mx-2">
            <h3 className="font-bold text-lg mb-2 flex justify-start dark:text-orange- text-[#0c0d2e] dark:text-orange-300">
              Skills:{" "}
            </h3>
            <div className="flex flex-wrap justify-start">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#0c0d2e] dark:bg-[#2F3F57] text-orange-300 dark:text-white/80 rounded-lg mx-0.5 p-2 h-fit mb-1 flex items-center">
                  {SKILL_ICONS[skill] ?? null}
                  {skill}
                </span>
              ))}
            </div>
          </section>
          <section className="flex flex-col lg:mx-0 mx-2">
            <h3 className="font-bold text-lg my-2 flex justify-start text-[#0c0d2e] dark:text-orange-300">
              Currently Exploring:{" "}
            </h3>
            <div className="flex flex-wrap justify-start">
              {currentlyExploring.map((subject, idx) => (
                <span
                  key={idx}
                  className="bg-[#0c0d2e] dark:bg-[#2F3F57] text-orange-300 dark:text-white/80  rounded-lg mx-0.5 p-2 h-fit mb-1">
                  {subject}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
