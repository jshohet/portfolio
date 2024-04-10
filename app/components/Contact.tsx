'use client'
import React, { useState } from "react";

const Contact = ({ id }: { id: string }) => {
  const [messageBody, setMessageBody] = useState("");
  const [name, setName] = useState("");

  return (
    <div id={id} className="scroll-mt-10">
      <h1 className="font-bold text-3xl my-8 flex justify-center titles dark:text-orange-400 text-[#0c0d2e]">
        Contact
      </h1>
      <div className="mx-8 bg-white shadow-lg rounded-md">
        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full px-3 mb-5">
            <label className="block uppercase tracking-wide text-[#0c0d2e] text-lg font-bold mb-2">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-[#0c0d2e] text-lg font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="w-full px-3 mt-5">
            <label className="text-lg block uppercase tracking-wide text-[#0c0d2e] font-bold mb-2">
              Message
            </label>
            <textarea
              onChange={(e) => setMessageBody(e.target.value)}
              value={messageBody}
              className="appearance-none block w-full bg-gray-200 resize-none text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white h-32"
              placeholder="Hi, I'd love to hire you!"></textarea>
          </div>
          <div className="mb-3 mt-5 py-2 border-2 rounded-[.65rem] border-solid border-black/80 hover:border-orange-500">
            <a
              href={`mailto:joe.shohet@gmail.com?subject=Email%20from%20Portfolio&body=Hi%2C%20my%20name%20is%20${name}.%20${messageBody}`}
              target="_blank"
              className="w-full text-xl text-black/80 p-2 text-center hover:bg-[#0c0d2e] rounded-lg hover:text-orange-300">
              Submit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
