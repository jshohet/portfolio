"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RiDownload2Fill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const firstNameLetters = ["J", "O", "S", "E", "F"];
const lastNameLetters = ["S", "H", "O", "H", "E", "T"];

const NameLetter = ({ letter }: { letter: string }) => {
  return (
    <div className="px-1 sm:px-[2%] flex flex-col transition-none transform group">
      <div className="transition-all transform translate-y-[57%] md:translate-y-[40%] z-10 ease-out duration-300 group-hover:translate-y-[-5%] group-active:translate-y-[-5%]">
        {letter}
      </div>
      <div className="transition-all transform scale-y-[-1] z-[9.9] group-hover:opacity-0 ease-in duration-200  bg-clip-text text-transparent bg-gradient-to-b from-transparent to-[#abaaaa]  group-hover:translate-y-[10%]">
        {letter}
      </div>
    </div>
  );
};

const Home = ({ id }: { id: string }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mb-20 scroll-mt-10" id={id}>
      <div className="absolute top-20 w-full z-100 bg-gradient-to-b from-[#e1e4e5] via-[#e1e4e5] to-transparent dark:from-[#2e3c4f] dark:via-[#2e3c4f]">
        <h1 className="sr-only">
          Josef Shohet - Full-Stack Developer building Next.js, React,
          TypeScript, Prisma, and PostgreSQL applications
        </h1>
        <div
          aria-hidden="true"
          className="flex justify-center ml-2 text-[30px] sm:text-4xl md:text-6xl mt-10 select-none">
          {firstNameLetters.map((letter, idx) => (
            <NameLetter key={`first-${letter}-${idx}`} letter={letter} />
          ))}
          &nbsp; &nbsp;
          {lastNameLetters.map((letter, idx) => (
            <NameLetter key={`last-${letter}-${idx}`} letter={letter} />
          ))}
        </div>
        <div>
          <h2 className="text-black/80 dark:text-white/80 font-semibold text-center text-lg sm:text-xl mt-2 select-none">
            Full-Stack Developer
          </h2>
          <p className="mx-auto mt-3 max-w-2xl px-4 text-center text-sm sm:text-base text-[#0c0d2e]/80 dark:text-white/80">
            I build full-stack software that replaces manual work — automation
            systems, data dashboards, and web products that keep real operations
            running.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-2 items-center mt-52 md:mt-60 ">
        <Image
          src="/img/headshot.jpg"
          alt="Photo of Josef Shohet"
          width={580}
          height={580}
          className="rounded-full mb-4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72"
        />
        <div className=" border-2 rounded-[.65rem] border-solid dark:bg-white/80 border-black/80 hover:border-orange-500">
          <a
            href="/JosefShohetResume.pdf"
            className="flex items-center pt-2 text-black/80 text-xl md:text-3xl px-1.5 pb-2 sm-1.5  hover:bg-[#0c0d2e] rounded-lg hover:text-orange-300"
            download={"/JosefShohetResume.pdf"}>
            Josef&#39;s Resume <RiDownload2Fill className="ml-2" size={25} />
          </a>
        </div>
        <div className="flex justify-center mt-2">
          <a
            href="https://github.com/jshohet"
            target="_blank"
            className="flex flex-row items-center cursor-pointer group mr-2">
            <FaGithub
              size={30}
              className="text-black dark:text-white/80  mr-1 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out group-hover:rotate-315"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/josef-shohet"
            className="flex flex-row items-center cursor-pointer group"
            target="_blank">
            <FaLinkedin
              size={30}
              className="text-cyan-500 ml-1 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out group-hover:rotate-405"
            />
          </a>
        </div>
        <a
          href="#about"
          aria-label="Scroll to about"
          className={`mt-6 flex justify-center text-black/40 dark:text-white/40 hover:text-orange-400 dark:hover:text-orange-400 transition-all duration-500 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <FiChevronDown size={28} className="animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default Home;
