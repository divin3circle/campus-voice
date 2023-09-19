import React, { useEffect, useState } from "react";
import { useUser } from "./UserContext"; // Import useUser from UserContext
import { campusData } from "./data"; // Import the campus data
import { getDoc, setDoc, uploadFile } from "@junobuild/core";
import { nanoid } from "nanoid";

const Home = ({ reg }) => {
  const { userCampus } = useUser(); // Access userCampus from the context
  const [hasVote, setHasVote] = useState(false);
  const [data, setData] = useState(campusData);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const userInfo = await getDoc({
          collection: "users",
          key: reg,
        });
        if (userInfo?.data?.voted) {
          setHasVote(true);
        } else {
          setHasVote(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const userCampusData = campusData.find(
    (campus) => campus.name === userCampus
  );

  const user = async () => {
    try {
      const user = await getDoc({
        collection: "users",
        key: reg,
      });
      const updatedUser = {
        ...user.data,
        voted: true,
      };
      await setDoc({
        collection: "users",
        doc: {
          ...user,
          data: updatedUser,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const showVote = async (n) => {
    try {
      const tally = await getDoc({
        collection: "contestants",
        key: String(n),
      });
      return tally?.data?.votes;
    } catch (err) {
      console.error("Error fetching vote tally:", err);
      return null;
    }
  };

  const handleVote = async (reg) => {
    const regNumber = String(reg);
    if (hasVote) {
      alert("You have already voted!");
    } else {
      try {
        const contInfo = await getDoc({
          collection: "contestants",
          key: regNumber,
        });

        const newContInfo = {
          ...contInfo.data,
          votes: contInfo.data.votes + 1,
        };

        await setDoc({
          collection: "contestants",
          doc: {
            ...contInfo,
            data: newContInfo,
          },
        });

        user();
        setHasVote(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  if (!userCampusData) {
    // Handle the case where userCampusData is not found (invalid campus)
    return (
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold">Welcome to the Voting Page</h2>
        <p className="text-red-600">You are from an invalid campus.</p>
      </div>
    );
  }

  const { contestants } = userCampusData; // Access contestants for the user's campus

  return (
    <div className="text-center mt-4 font-mono">
      <h2 className="text-2xl font-semibold">Welcome to the Voting Page</h2>
      <h3 className="text-lg font-medium mt-2">
        Contestants for {userCampus}:
      </h3>
      <p className="font-light text-xl text-gray-800">User: {reg}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {contestants.map((contestant) => (
          <li
            key={contestant.regNo}
            onClick={() => handleVote(contestant.regNo)}
            className="bg-white cursor-pointer hover:scale-105 hover:bg-vote hover:text-dark ease-in duration-200 shadow-md p-4 mx-2 rounded-lg"
          >
            <img
              src={contestant.imgUrl}
              alt={contestant.name}
              className="mx-auto rounded-full object-cover h-20 w-20 mb-2"
            />
            <h4 className="text-lg font-semibold">{contestant.name}</h4>
            <p className="text-sm text-dark">{contestant.position}</p>
            {hasVote ? (
              <div className="w-full mt-2 bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div
                  className="bg-blue-300 h-4 rounded-full flex justify-center items-center p-1 font-semibold"
                  style={{
                    width: "45%",
                  }}
                >
                  {showVote(contestant.regNo) === null
                    ? "Error fetching vote tally"
                    : `${showVote(contestant.regNo)} votes`}
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
