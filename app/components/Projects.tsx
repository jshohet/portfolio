import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi/";
import {BsGithub} from 'react-icons/bs/'
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import {TbBrandNextjs} from 'react-icons/tb'

const Projects = ({ id }: { id: string }) => {
  return (
    <div id={id}>
      <h1 className="font-bold text-3xl my-8 text-center">Projects</h1>
      <div className="ml-52">
        <div className="flex flex-row mb-10">
          <Image
            src="/img/chewplushdemo.PNG"
            width={300}
            height={300}
            alt="Chew plush store demo image."
            className="hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10"
          />
          <div className="max-w-[50%]">
            <h2 className="font-bold text-xl mb-2">Chew Plush Store</h2>
            <p className="mb-2">
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
        <div className="flex flex-row mb-10">
          <Image
            src="/img/currencyexchangedemo.PNG"
            width={300}
            height={300}
            alt="Currency exchange demo."
            className="hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10"
          />
          <div className="max-w-[50%]">
            <h2 className="font-bold text-xl mb-2">Exchange Global</h2>
            <p className="mb-2">
              Exchange Global is a sleek, fast way to look up currency rates for
              almost any currency, including crypto.
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
        <div className="flex flex-row">
          <Image
            src="/img/todolistdemo.PNG"
            width={300}
            height={300}
            alt="To-do list demo."
            className="hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10"
          />
          <div className="max-w-[50%]">
            <h2 className="font-bold text-xl mb-2">Task Driver</h2>
            <p className="mb-2">
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
    </div>
  );
};

export default Projects;
