import React from "react";

const About = ({ id }: { id: string }) => {
  return (
    <div className="mb-20 mt-10" id={id}>
      <h1 className="font-bold text-3xl my-8 text-center">About</h1>
      <div className="flex flex-col lg:flex-row mt-10 justify-center">
        <div className="bg-slate-700 dark:bg-slate-600 text-white rounded-lg lg:mr-10 w-fit lg:max-w-[30%] p-2 lg:ml-0 mx-2">
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
        <section className="lg:max-w-[40%] flex flex-col lg:mx-0 mx-1">
          <h3 className="font-bold text-lg my-2 text-center">Skills: </h3>
          <div className="flex flex-wrap">
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              HTML
            </span>
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              CSS
            </span>
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              Javascript
            </span>
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              TypeScript
            </span>
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              jQuery
            </span>
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              TailwindCSS
            </span>
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              Bootstrap
            </span>
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              React
            </span>
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              Next.js
            </span>
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              C#
            </span>
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              SQL
            </span>
            <span className="bg-slate-400 dark:text-slate-800 rounded-lg mx-0.5 px-1 h-fit mb-1">
              Git
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
