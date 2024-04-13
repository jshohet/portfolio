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
      <h1 className="font-bold text-3xl mt-8 mb-20 flex justify-center titles text-[#0c0d2e] dark:text-orange-400">
        About
      </h1>
      <div className=" lg:mx-20 grid grid-cols-1 lg:grid-cols-[45%_auto]">
        <div className="text-[#0c0d2e] dark:text-white/80 dark:bg-[#2F3F57] mb-2 bg-orange-300 h-fit  rounded-lg lg:mr-10 w-fit p-4 lg:ml-0 mx-2">
          <p className="indent-5 my-1">
            Hey, I&#39;m Josef Shohet,aspiring to excel as a front-end React
            developer. With a not-so-brief string in landscaping resulting in a more recent dive into
            software development, I&#39;ve discovered my passion for crafting
            websites. My journey has sharpened my determination, focus, and eye
            for detail, driving me toward personal and professional success.
          </p>
          <p className="indent-5 mt-2">
            Entering the professional realm as a freelance developer, I&#39;ve
            embarked on several projects, including a significant endeavor—a
            detailed video game guide designed for simplicity yet depth. This
            experience solidifies my conviction that website development is my
            true calling. Each day, the prospect of working on such projects
            fills me with excitement and drive.
          </p>
          <p className="indent-5 mt-2">
            When I&#39;m not learning or coding, I enjoy playing video games,
            reading, and working out. These all contribute in various ways to
            keep my mind engaged and inspired.
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
