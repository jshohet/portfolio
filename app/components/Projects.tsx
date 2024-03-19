import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi/";
import { BsGithub } from "react-icons/bs/";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";
import { DiJqueryUiLogo } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const Projects = ({ id }: { id: string }) => {
  return (
    <div id={id}>
      <h1 className="font-bold text-3xl my-8 text-center">Projects</h1>
      <div className="ml-8">
        <div className="flex flex-col md:flex-row mb-10">
          <Image
            src="/img/comingsoon.jpg"
            width={320}
            height={300}
            alt="Choubot face picture."
            className="hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10 rounded-md mb-2"
          />
          <div className="w-fit md:max-w-[50%]">
            <h2 className="font-bold text-xl mb-2">Raider&#39;s Digest</h2>
            <p className="mb-2 mr-1">
              A soon-to-be website with various resources for Final Fantasy XIV
              players that want to explore Ultimate content. Collaborative
              effort with several teammates.
            </p>
            <div className="flex flex-row mb-2">
              <BiLogoTypescript size={30} className="text-cyan-400" />
              <BiLogoTailwindCss size={30} className="text-cyan-600" />
              <TbBrandNextjs size={30} className="text-black" />
            </div>
            <a
              href="javascript:void(0)"
              className="flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5">
              Coming soon!
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-10">
          <Image
            src="/img/choubot.png"
            width={320}
            height={300}
            alt="Choubot face picture."
            className="hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10 rounded-md mb-2"
          />
          <div className="w-fit md:max-w-[50%]">
            <h2 className="font-bold text-xl mb-2">Chou Bot</h2>
            <p className="mb-2 mr-1">
              A discord bot with integrated with chatGPT to provide a sarcastic
              chatbot companion. Also comes with commands and a levelling system
              within the discord. Currently serving 20 people. Currently not
              available to try.
            </p>
            <div className="flex flex-row mb-2">
              <FaNodeJs size={30} className="text-cyan-400" />
              <BsDiscord size={30} className="text-cyan-600" />
            </div>
            <a
              href="javascript:void(0)"
              className="cursor-not-allowed flex flex-row mb-1 bg-slate-400/70 text-white/90 w-fit rounded-md p-0.5">
              Add this bot to your server (currently disabled)
              <FiArrowUpRight className="ml-1 mt-0.5 text-black" size={18} />
            </a>
            <a
              href="https://github.com/jshohet/discord-bot"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5"
              target="_blank">
              Source code on github{" "}
              <BsGithub className="ml-1 mt-0.5 text-black" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-10">
          <Image
            src="/img/zhonglibot.png"
            width={320}
            height={300}
            alt="Zhongli bot face picture."
            className="hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10 rounded-md mb-2"
          />
          <div className="w-fit md:max-w-[50%]">
            <h2 className="font-bold text-xl mb-2">Zhongli Bot</h2>
            <p className="mb-2 mr-1">
              A Zhongli role-playing bot for discord. Requires a #zhongli
              channel in your discord for message responses with quotes. Fairly
              simple but commissioned. Try it out!
            </p>
            <div className="flex flex-row mb-2">
              <FaNodeJs size={30} className="text-cyan-400" />
              <BsDiscord size={30} className="text-cyan-600" />
            </div>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1218259970559184916&permissions=139586717760&scope=bot+applications.commands"
              target="_blank"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5">
              Add this bot to your server{" "}
              <FiArrowUpRight className="ml-1 mt-0.5 text-black" size={18} />
            </a>
            <a
              href="https://github.com/jshohet/zhongli"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5"
              target="_blank">
              Source code on github{" "}
              <BsGithub className="ml-1 mt-0.5 text-black" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-10">
          <Image
            src="/img/chewplushdemo.PNG"
            width={320}
            height={300}
            alt="Chew plush store demo image."
            className="hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10 rounded-md mb-2"
          />
          <div className="w-fit md:max-w-[50%]">
            <h2 className="font-bold text-xl mb-2">Chew Plush Store</h2>
            <p className="mb-2 mr-1">
              Your one stop shop for any plushies you want. No, you cannot
              actually purchase any.
            </p>
            <div className="flex flex-row mb-2">
              <BiLogoTypescript size={30} className="text-cyan-400" />
              <BiLogoTailwindCss size={30} className="text-cyan-600" />
              <TbBrandNextjs size={30} className="text-black" />
            </div>
            <a
              href="https://chew-plush-store.vercel.app/"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5">
              Try out this site{" "}
              <FiArrowUpRight className="ml-1 mt-0.5 text-black" size={18} />
            </a>
            <a
              href="https://github.com/jshohet/plush-store"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5"
              target="_blank">
              Source code on github{" "}
              <BsGithub className="ml-1 mt-0.5 text-black" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-10">
          <Image
            src="/img/currencyexchangedemo.PNG"
            width={320}
            height={300}
            alt="Currency exchange demo."
            className="hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10 rounded-md mb-2"
          />
          <div className="w-fit md:max-w-[50%]">
            <h2 className="font-bold text-xl mb-2">Exchange Global</h2>
            <p className="mb-2 mr-1">
              Exchange Global is a sleek, fast way to look up rates for almost
              any currency, including crypto.
            </p>
            <div className="flex flex-row mb-2">
              <BiLogoTypescript size={30} className="text-cyan-400" />
              <BiLogoTailwindCss size={30} className="text-cyan-600" />
              <TbBrandNextjs size={30} className="text-black" />
            </div>
            <a
              href="https://josef-currency-exchange.vercel.app/"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5">
              Try out this site!{" "}
              <FiArrowUpRight className="ml-1 mt-0.5 text-black" size={18} />
            </a>
            <a
              href="https://github.com/jshohet/currency-app"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5"
              target="_blank">
              Source code on github{" "}
              <BsGithub className="ml-1 mt-0.5 text-black" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <Image
            src="/img/todolistdemo.PNG"
            width={320}
            height={300}
            alt="To-do list demo."
            className="hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10 rounded-md mb-2"
          />
          <div className="w-fit md:max-w-[50%]">
            <h2 className="font-bold text-xl mb-2">Task Driver</h2>
            <p className="mb-2 mr-1">
              Task driver is a compact to-do list that stays even when you leave
              the page.
            </p>
            <div className="flex flex-row mb-2">
              <BiLogoTypescript size={30} className="text-cyan-400" />
              <BiLogoTailwindCss size={30} className="text-cyan-600" />
              <TbBrandNextjs size={30} className="text-black" />
            </div>
            <a
              href="https://josef-todo-list.vercel.app/"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5">
              Try out this site!{" "}
              <FiArrowUpRight className="ml-1 mt-0.5 text-black" size={18} />
            </a>
            <a
              href="https://github.com/jshohet/todo-list"
              className="cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5"
              target="_blank">
              Source code on github{" "}
              <BsGithub className="ml-1 mt-0.5 text-black" />
            </a>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-3xl my-8 text-center">
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
      </div>
    </div>
  );
};

export default Projects;
