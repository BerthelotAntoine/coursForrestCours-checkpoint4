import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchAuth from "./lib/auth";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    fetchAuth().then((response) => setCurrentUser(response));
  }, []);

  return <Outlet context={{ currentUser, setCurrentUser }} />;
}

export default App;
