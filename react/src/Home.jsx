import React, { useEffect, useState } from "react";
import { useUser } from "./UserContext"; // Import useUser from UserContext
import { campusData } from "./data"; // Import the campus data
import { getDoc, setDoc, uploadFile } from "@junobuild/core";
import Loading from "./Loading";
//import { contestants } from "./contestantData";
import { toast } from "react-toastify";
// minified version is also included

const Home = ({ reg }) => {
  const { userCampus } = useUser(); // Access userCampus from the context
  const [hasVote, setHasVote] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(campusData);
  const [votes, setVotes] = useState({});
  const [votesData, setVotesData] = useState({});
  const userCampusData = campusData.find(
    (campus) => campus.name === userCampus
  );

  const { contestants } = userCampusData;

  useEffect(() => {
    // Fetch and update the vote tallies for all contestants here
    const fetchAllVoteTallies = async () => {
      const updatedVotesData = {};

      for (const contestant of contestants) {
        try {
          const tally = await getDoc({
            collection: "contestants",
            key: String(contestant.regNo),
          });

          updatedVotesData[contestant.regNo] = tally?.data?.votes || 0;
        } catch (err) {
          console.error("Error fetching vote tally:", err);
        }
      }

      // Update the state with all vote tallies
      setVotesData(updatedVotesData);
    };

    fetchAllVoteTallies();
  }, [contestants]);

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
      setVotes({
        ...votes,
        [n]: tally.data.votes,
      });
    } catch (err) {
      console.error("Error fetching vote tally:", err);
      return null;
    }
  };

  const handleVote = async (reg) => {
    setLoading(true);
    const regNumber = String(reg);
    if (hasVote) {
      /*  alert("You have already voted!"); */
      toast.error("You have already voted!", {
        position: "top-center",
        autoClose: 4999,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
        showVote(regNumber);
        toast.success("🦄 Vote submitted successfully!", {
          position: "top-center",
          autoClose: 2999,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } catch (err) {
        toast.error("An error occurred", {
          position: "top-center",
          autoClose: 4999,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        //console.log(err);
      }
    }
    setLoading(false);
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

  // Access contestants for the user's campus
  if (loading) {
    return <Loading text="Submitting your vote to the IC blockchain⛓️..." />;
  }

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
                    width: "85%",
                  }}
                >
                  {votesData[contestant.regNo]} votes
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
