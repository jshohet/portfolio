import React from "react";
import { FaLinkedin, FaPhoneVolume } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

const Contact = ({ id }: { id: string }) => {
  return (
    <div id={id} className="scroll-mt-10">
      <h1 className="font-bold text-3xl my-8 text-center">Contact Info</h1>
      <div className="flex justify-center">
        <a
          href="https://github.com/jshohet"
          target="_blank"
          className="flex flex-row items-center cursor-pointer">
          <FaGithub size={30} className="text-black mr-1" />
          <h2 className="">Github Profile</h2>
        </a>
      </div>
      <div className="flex justify-center">
        <a
          href="mailto: joe.shohet@gmail.com?subject=Email from Portfolio"
          target="_blank"
          className="flex flex-row items-center cursor-pointer">
          <IoMdMailOpen size={30} className="text-cyan-300 mr-1" />
          <h2 className="">Email me</h2>
        </a>
      </div>
      <div className="flex justify-center my-2">
        <a
          href="https://www.linkedin.com/in/josef-shohet"
          className="flex flex-row items-center cursor-pointer"
          target="_blank">
          <FaLinkedin size={30} className="text-cyan-500 mr-1" />
          <h2>LinkedIn</h2>
        </a>
      </div>
      <div className="flex flex-row items-center justify-center">
        <FaPhoneVolume size={25} className="text-red-700 mr-1" />
        <h2>(617) 610-1795 </h2>
      </div>
    </div>
  );
};

export default Contact;
