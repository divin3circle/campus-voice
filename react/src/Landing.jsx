import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        CampusVoice
      </h1>
      <h1 className="font-semibold text-gray-700 text-2xl sm:text-4xl">
        {" "}
        Decentralized Campus Voting
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        CampusVoice is your platform for open and fair decentralized elections
        on campus. Empower your student body to make decisions that matter by
        casting their votes securely on the Internet Computer. With CampusVoice,
        the democratic process is transparent, accessible, and decentralized,
        ensuring that every voice is heard and every vote counts. Join us in
        shaping the future of your campus community through secure and
        decentralized elections{" "}
        <a
          href="https://juno.build"
          rel="noopener noreferrer"
          target="_blank"
          className="underline"
        >
          Juno
        </a>
        .
      </p>
      <Link to="/campus">
        <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Get started
        </button>
      </Link>
    </div>
  );
};

export default Landing;
