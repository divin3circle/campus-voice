import { getDoc, setDoc } from "@junobuild/core";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { set } from "date-fns";

const SetUp = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [institutionDetails, setInstitutionDetails] = useState({
    name: "",
    firstContestant: "",
    secondContestant: "",
    date: "",
  });
  const [name, setName] = useState("");
  const [firstContestant, setFirstContestant] = useState("");
  const [secondContestant, setSecondContestant] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date); // Print the selected date to the console
  };

  /*  const handleInstitutionChange = (e) => {}; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    institutionDetails.name = name;
    institutionDetails.firstContestant = firstContestant;
    institutionDetails.secondContestant = secondContestant;
    institutionDetails.date = selectedDate;
    setInstitutionDetails(institutionDetails);
    setLoading(true);
    try {
      let institution;

      institution = await getDoc({
        collection: "institutions",
        key: name,
      });

      if (institution === undefined) {
        await setDoc({
          collection: "institutions",
          doc: {
            key: name,
            data: {
              name,
              firstContestant,
              secondContestant,
              date: selectedDate,
            },
          },
        });
      }
      //navigate("/home");
    } catch (e) {
      setLoading(false);
      toast.error("Error adding election details!", {
        position: "top-center",
        autoClose: 4999,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(e);
    }
    // You can now access the form data in the formData object
    console.log("Form Data:", institutionDetails);
    // Perform any further actions, such as sending the data to a server.
    setLoading(false);
    toast.success("Election details added successfully!", {
      position: "top-center",
      autoClose: 4999,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    /* setTimeout(() => {
      navigate("/home");
    }, 1000); */
  };
  /* loading && <Loading />; */
  if (loading)
    return (
      <Loading text="Setting up your election on the Internet Computer🚀" />
    );

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8s sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Welcome to the Campus Voice institution section. Use this section to
          set up an election for your organization or institution.
        </p>

        <form
          action="submit"
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-lg font-medium">Election Details</p>

          <div>
            <label htmlFor="institution" className="sr-only">
              Institution
            </label>

            <div className="relative">
              <input
                id="institution"
                type="text"
                className="w-full rounded-lg border-gray-600 border-[1px] p-4 pe-12 text-sm shadow-sm"
                placeholder="Name of institution"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="name1" className="sr-only">
              First Contestant
            </label>

            <div className="relative">
              <input
                id="name1"
                type="text"
                className="w-full rounded-lg border-[1px] border-gray-600 p-4 pe-12 text-sm shadow-sm"
                placeholder="First contestant"
                value={firstContestant}
                onChange={(e) => setFirstContestant(e.target.value)}
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="name2" className="sr-only">
              Second Contestant
            </label>

            <div className="relative">
              <input
                id="name2"
                type="text"
                class="w-full rounded-lg border-[1px] border-gray-600 p-4 pe-12 text-sm shadow-sm"
                placeholder="Second contestant"
                value={secondContestant}
                onChange={(e) => setSecondContestant(e.target.value)}
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="w-full flex gap-2 justify-between items-center border-[1px] border-gray-600 rounded-lg p-1">
            <label className="text-gray-400">Select a Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy" // Customize date format if needed
              className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring border-[1px] border-gray-600 focus:border-blue-300 "
            />
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Set up
          </button>

          <p className="text-center text-sm text-gray-500">
            Not a institution?
            <Link to="/register" className="underline">
              Vote now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SetUp;
