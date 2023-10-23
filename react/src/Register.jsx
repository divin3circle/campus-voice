import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { getDoc, setDoc } from "@junobuild/core";
import { toast } from "react-toastify";

const Register = ({ reg, setReg }) => {
  //const history = useHistory();
  //const history = unstable_HistoryRouter();
  const { setUserCampus } = useUser(); // Access setUserCampus from the context

  const navigate = useNavigate();

  const [campus, setCampus] = useState("Campus A");

  const handleCampusChange = (e) => {
    setCampus(e.target.value);
  };
  const user = async () => {
    try {
      //console.log(key);
      let user;
      user = await getDoc({
        collection: "users",
        key: reg,
      });
      if (user === undefined)
        await setDoc({
          collection: "users",
          doc: {
            key: reg,
            data: {
              reg,
              campus,
            },
          },
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert the registration number to an integer
    const regNumber = parseInt(reg);

    // Define the registration number ranges for each campus
    const campusRanges = {
      "Campus A": [1, 2, 3, 4, 5, 6],
      "Campus B": [7, 8, 9, 10, 11, 12],
      "Campus C": [13, 14, 15, 16, 17, 18],
    };

    // Check if the entered registration number is within the selected campus's range
    if (campusRanges[campus].includes(regNumber)) {
      // Registration is valid, you can perform the login logic here
      //console.log(`User with reg number ${reg} logged in to ${campus}`);
      setUserCampus(campus); // Set the user's campus in the context
      /* history.push("/home"); */
      user();
      navigate("/home");
    } else {
      // Registration is invalid, display an error
      /* alert(
        "Invalid registration number for the selected campus. Please try again."
      ); */
      toast.warn("Invalid registration number for the selected campus!", {
        position: "top-center",
        autoClose: 4999,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex-col justify-center font-mono items-centers">
      <h1 className="text-2xl sm:text-4xl font-bold p-4">
        {campus} Registration
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="">
            <label htmlFor="campus" className="p-2 font-semibold text-lg">
              Select Campus:
            </label>
          </div>
          <div className="flex items-center justify-center">
            <select
              id="campus"
              value={campus}
              onChange={handleCampusChange}
              name="campus"
              className="p-2 font-mono font-semibold w-[55%]"
            >
              <option value="Campus A" className="p-2 font-mono">
                Campus A
              </option>
              <option value="Campus B" className="p-2 font-mono">
                Campus B
              </option>
              <option value="Campus C" className="p-2 font-mono">
                Campus C
              </option>
            </select>
          </div>{" "}
        </div>
        <div className="mb-4 flex flex-col justify-center items-center">
          <label htmlFor="reg" className="p-2 font-semibold text-lg">
            Student's Number:
          </label>
          <input
            type="text" // You can change this to number if you want
            value={reg}
            onChange={(e) => setReg(e.target.value)}
            name="reg"
            className="p-4 font-mono bg-slate-200  text-center rounded-lg focus:ring-2 ring-teal-500 font-semibold"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Proceed to vote
        </button>
      </form>
    </div>
  );
};

export default Register;
