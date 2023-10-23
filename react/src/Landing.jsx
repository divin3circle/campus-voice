import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="">
      <div className="md:mt-">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          CampusVoice
        </h1>
        <h1 className="font-semibold p-2 text-gray-700 text-2xl sm:text-4xl">
          {" "}
          Decentralized Campus Voting
        </h1>
        <p className=" p-4 text-lg leading-8 text-gray-600">
          CampusVoice is your platform for open and fair decentralized elections
          on campus. Empower your student body to make decisions that matter by
          casting their votes securely on the Internet Computer. With
          CampusVoice, the democratic process is transparent, accessible, and
          decentralized, ensuring that every voice is heard and every vote
          counts. Join us in shaping the future of your campus community through
          secure and decentralized elections{" "}
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
        <Link className="mb-8" to="/campus">
          <button className="rounded-md mt-6 hover:bg-indigo-600/70 cursor-pointer hover:scale-105 ease-in duration-150 bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Get started
          </button>
        </Link>
      </div>
      <section className="bg-transparent text-black">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Why choose Decentralized Voting
            </h2>

            <p className="mt-4 text-gray-700">
              Decentralized voting is a new technology that has the potential to
              make elections more secure, transparent, accessible, and
              auditable.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 ">
            <a
              className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-blue-500 hover:shadow-blue-500/30 hover:scale-95 ease-in duration-150"
              href="/services/digital-campaigns"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-gray-700">Security</h2>

              <p className="mt-1 text-sm text-gray-500">
                Decentralized voting systems are more secure than centralized
                systems because they are not controlled by a single entity. This
                makes it much more difficult for attackers to tamper with the
                voting process or steal votes.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-blue-500 hover:shadow-blue-500/30 hover:scale-95 ease-in duration-150"
              href="/services/digital-campaigns"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-gray-700">
                Transparency
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Decentralized voting systems are more transparent than
                centralized systems because all of the votes are publicly
                recorded on a blockchain. This makes it much more difficult for
                election officials or other parties to manipulate the results of
                an election.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-blue-500 hover:shadow-blue-500/30 hover:scale-95 ease-in duration-150"
              href="/services/digital-campaigns"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-gray-700">
                Accessibility
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Decentralized voting systems can make it easier for people to
                vote, especially those who live in remote areas or who have
                difficulty getting to a polling place. This is because people
                can vote from anywhere in the world with an internet connection.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-blue-500 hover:shadow-blue-500/30 hover:scale-95 ease-in duration-150"
              href="/services/digital-campaigns"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-gray-700">
                Auditability
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Decentralized voting systems are easier to audit than
                centralized systems because all of the votes are stored on a
                public blockchain. This means that anyone can verify the results
                of an election to make sure that they are accurate.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-blue-500 hover:shadow-blue-500/30 ease-in hover:scale-95 duration-150"
              href="/services/digital-campaigns"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-gray-700">
                Cost-effective
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Decentralized voting systems can be more cost-effective than
                centralized systems because they do not require the same level
                of infrastructure and staffing
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-blue-500 hover:shadow-blue-500/30 hover:scale-95 ease-in duration-150"
              href="/services/digital-campaigns"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-gray-700">
                Efficiency
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Decentralized voting systems can make elections more efficient
                by automating many of the tasks involved in the voting process,
                such as voter registration, voter verification, and ballot
                counting.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
