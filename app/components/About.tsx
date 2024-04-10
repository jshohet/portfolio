import React from "react";

type Courses = {
  course: string,
  hours: string
}

interface IAboutProps {
  id: string,
  courseworks: Courses[],
  currentlyExploring: string[],
  skills: string[]
}

const About = ({ id, courseworks, currentlyExploring, skills }: IAboutProps) => {
  return (
    <div className="mb-20 mt-10 scroll-mt-10" id={id}>
      <h1 className="font-bold text-3xl my-8 flex justify-center titles text-[#0c0d2e] dark:text-orange-400">
        About
      </h1>
      <div className="flex flex-col lg:flex-row mt-10 mx-6 justify-center">
        <div className="text-[#0c0d2e] dark:text-white/80 dark:bg-[#0c0d2e] mb-2 bg-orange-300 h-fit  rounded-lg lg:mr-10 w-fit lg:max-w-[30%] px-3 py-1 lg:ml-0 mx-2">
          <p className="indent-5 my-1">
            Hey, I&#39;m Josef Shohet, an aspiring front-end React developer
            with a fresh perspective and drive to accomplish anything. Despite a
            limited professional history, I bring determination, focus, and a
            keen eye for detail to the table. I believe that my background, as
            well as motivation to succeed will help me achieve both my personal
            and professional goals.
          </p>
          <p className="indent-5 mt-2">
            When I&#39;m not learning or coding, I enjoy playing video games,
            reading, and working out. These all contribute in various ways to
            keep my mind engaged and inspired.
          </p>
        </div>
        <div className="lg:max-w-[40%]">
          <section className=" flex flex-col lg:mx-0 mx-1">
            <h3 className="font-bold text-lg mb-2 flex justify-center dark:text-orange- text-[#0c0d2e] dark:text-orange-300">
              Skills:{" "}
            </h3>
            <div className="flex flex-wrap justify-center">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#0c0d2e] text-orange-300 dark:text-white/80  rounded-lg mx-0.5 px-1 py-0.5 h-fit mb-1">
                  {skill}
                </span>
              ))}
            </div>
          </section>
          <section className="flex flex-col lg:mx-0 mx-1">
            <h3 className="font-bold text-lg my-2 flex justify-center text-[#0c0d2e] dark:text-orange-300">
              Currently Exploring:{" "}
            </h3>
            <div className="flex flex-wrap justify-center">
              {currentlyExploring.map((subject, idx) => (
                <span
                  key={idx}
                  className="bg-[#0c0d2e] text-orange-300 dark:text-white/80  rounded-lg mx-0.5 px-1 py-0.5 h-fit mb-1">
                  {subject}
                </span>
              ))}
            </div>
          </section>
          <section className="flex flex-col lg:mx-0 mx-1">
            <h3 className="font-bold text-lg my-2 flex justify-center text-[#0c0d2e] dark:text-orange-300">
              Coursework:{" "}
            </h3>
            <div className="flex flex-wrap justify-center ml-2 dark:text-white/80">
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
