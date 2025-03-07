import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./Landing";
import Auth from "./Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AddPersonaPage from "./components/AddPersonaPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId="895663561328-9k197o854e0fg6d36svrfei7fjb1l859.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/auth" />} />
          <Route path="/addpersona" element={isLoggedIn ? <AddPersonaPage /> : <Navigate to="/auth" />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
