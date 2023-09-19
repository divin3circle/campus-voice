import { Background } from "./Background";
import { Table } from "./Table";
import { Modal } from "./Modal";
import { getDoc, initJuno, setDoc } from "@junobuild/core";
import { Auth } from "./Auth";
import { useEffect, useState } from "react";
import Campus from "./Campus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Landin from "./Landin";
import { UserProvider } from "./UserContext";
import { contestantData } from "./contestantData";

function App() {
  // TODO: STEP_1_INITIALIZATION
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "43ihf-gaaaa-aaaal-aczta-cai",
      }))();
  }, []);
  const [reg, setReg] = useState("");

  return (
    <UserProvider>
      <>
        <div className="isolate bg-white">
          <main>
            <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-2xl pt-16">
                <div className="text-center rounded-2xl shadow-xl p-4">
                  <Auth>
                    <Router>
                      <Routes>
                        <Route index element={<Landin />} />
                        <Route path="campus" element={<Campus />} />
                        <Route
                          path="register"
                          element={<Register reg={reg} setReg={setReg} />}
                        />
                        <Route path="home" element={<Home reg={reg} />} />
                      </Routes>
                    </Router>
                    {/* <Campus /> */}
                    {/* <Table /> */}
                    {/* <Modal /> */}
                  </Auth>
                </div>
              </div>
              {/*  <Background /> */}
            </div>
            <div className="mt-8 flex items-center justify-center text-center">
              <h1 className="font-semibold p-2">
                Institution?{" "}
                <span>
                  <a
                    href="#"
                    className="font-normal text-blue-700 hover:underline hover:scale-105 ease-in duration-100"
                  >
                    Set up an election
                  </a>
                </span>
              </h1>
            </div>
          </main>
        </div>
      </>
    </UserProvider>
  );
}

export default App;
