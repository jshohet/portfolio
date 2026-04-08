import React from "react";
import Image from "next/image";
import { RiDownload2Fill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
  return (
    <div className="mb-20 scroll-mt-10" id={id}>
      <div className="absolute top-20 w-full z-100 bg-gradient-to-b from-[#e1e4e5] via-[#e1e4e5] to-transparent dark:from-[#2e3c4f] dark:via-[#2e3c4f]">
        <div className="flex justify-center ml-2 text-[30px] sm:text-4xl md:text-6xl mt-10 select-none">
          {firstNameLetters.map((letter) => (
            <NameLetter key={`first-${letter}`} letter={letter} />
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
        </div>
      </div>

      <div className="flex flex-col justify-center mx-2 items-center mt-52 md:mt-60 ">
        <Image
          src="/img/headshot.jpg"
          alt="Josef Shohet's face"
          width={580}
          height={580}
          className="rounded-full mb-4"
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
      </div>
    </div>
  );
};

export default Home;
