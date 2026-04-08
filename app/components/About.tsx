import React from "react";

type Courses = {
  course: string;
  hours: string;
};

interface IAboutProps {
  id: string;
  courseworks: Courses[];
  currentlyExploring: string[];
  skills: string[];
}

const About = ({
  id,
  courseworks,
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
            I build full-stack software that improves real-world operations.
          </p>
          <p className="indent-5 mt-2">
            Full-stack developer with experience managing $50K+/week operations
            and building web applications that reduce costs, errors, and manual
            work. I specialize in turning messy workflows into clean, scalable
            systems with React, Next.js, TypeScript, Node.js, Prisma, and
            PostgreSQL.
          </p>
          <p className="indent-5 mt-2">
            My recent work includes automation systems, publishing platforms,
            and marketplace-style product experiences with search, data, and
            operations tooling.
          </p>
          <p className="indent-5 mt-2">
            Currently focused on building modern full-stack products for teams
            that need reliable software, cleaner workflows, and data-driven
            decision making.
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
                  className="bg-[#0c0d2e] dark:bg-[#2F3F57] text-orange-300 dark:text-white/80  rounded-lg mx-0.5 p-2 h-fit mb-1">
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
          <section className="flex flex-col lg:mx-0 mx-2">
            <h3 className="font-bold text-lg my-2 flex justify-start text-[#0c0d2e] dark:text-orange-300">
              Coursework:{" "}
            </h3>
            <div className="flex flex-col flex-wrap items-start ml-2 dark:text-white/80">
              {courseworks.map((course, idx) => (
                <div key={idx}>
                  {course.course} -{" "}
                  <span className="italic">{course.hours}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
