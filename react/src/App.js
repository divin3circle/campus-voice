import { getDoc, initJuno, setDoc } from "@junobuild/core";
import { Auth } from "./Auth";
import { useEffect, useState } from "react";
import Campus from "./Campus";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import { UserProvider } from "./UserContext";
import Landing from "./Landing";
import SetUp from "./SetUp";
import Footer from "./Footer";

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
        <div className="isolate h-screen bg-white">
          <main>
            <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-2xl pt-16">
                {/*<Landing />*/}
                <div className="text-center rounded-2xl shadow-xl p-4">
                  <Auth>
                    <Router>
                      <Routes>
                        <Route index element={<Landing />} />
                        <Route path="campus" element={<Campus />} />
                        <Route
                          path="register"
                          element={<Register reg={reg} setReg={setReg} />}
                        />
                        <Route path="home" element={<Home reg={reg} />} />
                        <Route path="setup" element={<SetUp />} />
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
            {/*<Footer />*/}
          </main>
        </div>
      </>
    </UserProvider>
  );
}

export default App;
