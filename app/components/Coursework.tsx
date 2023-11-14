import React from 'react'

const Coursework = ({ id }: { id: string }) => {
  return (
    <div id={id}>
      <h1 className="font-bold text-3xl my-8 text-center">Coursework</h1>
      <div className="flex flex-col items-center mb-8">
        <h2 className="font-bold text-xl mb-2">Notable Courses:</h2>
        <ul>
          <li>
            FreeCodeCamp React Course - <span className="italic">50 hours</span>
          </li>
          <li>
            Tim Corey C# Master Course -{" "}
            <span className="italic">200 hours</span>
          </li>
          <li>
            Tim Corey Web Dev Master Course -
            <span className="italic">100 hours</span>
          </li>
          <li>
            Tim Corey Youtube Project Compilations -{" "}
            <span className="italic">150 hours</span>
          </li>
        </ul>
      </div>
      <div className="mb-2 flex flex-col items-center">
        <h3 className="font-bold text-lg my-2">
          Various other subjects explored:
        </h3>
        <ul className="text-center">
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
          <li>Next.js</li>
          <li>TypeScript</li>
        </ul>
        <h3 className="font-bold text-lg mt-2">Currently exploring: </h3>
        <ul className="text-center">
          <li>React animations</li>
          <li>Redux in React/Next.js</li>
          <li>SQL</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  );
};

export default Coursework