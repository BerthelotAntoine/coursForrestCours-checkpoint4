import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchAuth from "./lib/auth";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    fetchAuth().then((response) => setCurrentUser(response));
  }, []);

  return (
    <>
      <Navbar />
      <Outlet context={{ currentUser, setCurrentUser }} />
    </>
  );
}

export default App;
