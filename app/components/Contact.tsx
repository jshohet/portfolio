"use client";
import React, { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const Contact = ({ id }: { id: string }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
    }
  };

  return (
    <div id={id} className="scroll-mt-10">
      <h2 className="font-bold text-3xl mt-8 mb-20 flex justify-center titles dark:text-orange-400 text-[#0c0d2e]">
        Contact
      </h2>
      <div className="mx-2 lg:mx-20 grid grid-cols-1 bg-white dark:bg-[#2F3F57] shadow-lg rounded-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center p-4 mb-6">
          <div className="w-full px-3 mb-5">
            <label className="block uppercase tracking-wide pt-2 text-[#0c0d2e] dark:text-white/80 text-lg font-bold mb-2">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-[#0c0d2e] dark:text-white/80 text-lg font-bold mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="w-full px-3 mt-5">
            <label className="text-lg block uppercase tracking-wide text-[#0c0d2e] dark:text-white/80 font-bold mb-2">
              Message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
              className="appearance-none block w-full bg-gray-200 resize-none text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white h-32"
              placeholder="Hi, I'd love to hire you!"
            />
          </div>
          <div className="mb-3 mt-5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="py-2 px-4 border-2 rounded-[.65rem] border-solid border-black/80 hover:border-orange-500 text-xl text-black/80 dark:bg-white/80 hover:bg-[#0c0d2e] hover:text-orange-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </div>
          {status === "success" && (
            <p className="w-full text-center text-green-500 font-semibold mt-2">
              Message sent! I&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="w-full text-center text-red-500 font-semibold mt-2">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
