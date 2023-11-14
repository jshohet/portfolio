import React from "react";
import Image from "next/image";

const Home = ({id} : {id:string}) => {
  return (
    <div className="mb-80" id={id}>
      <div className="flex flex-row justify-center items-center mt-32 ">
        <Image
          src="/img/headshot.jpg"
          alt="Josef Shohet's face"
          width={600}
          height={600}
          className="rounded-full"
        />
        <p className="max-w-[400px] ml-5 text-lg">
          Hi, my name is{" "}
          <span className="text-red-900 font-semibold">Josef Shohet</span>.
          Aspiring front-end React developer. Thanks for stopping by! Feel free
          to look around.
        </p>
      </div>
    </div>
  );
};

export default Home;
