import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";
import { useState } from "react";
import Logpopup from "../components/Logpopup";
import "./Home.css";

const Home = () => {
  const [isPopup, setIsPopup] = useState(true);
  const [isPopCalled, setIsPopCalled] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    setIsUserLoggedIn(true)
  }, [])

  return (
    <div className="app-home-wrapper">
      <Navbar setIsPopCalled={setIsPopCalled} isPopup={isPopup} setIsPopup={setIsPopup} />
      <Mainsection isPopup={isPopup} setIsPopup={setIsPopup} />
      <Logpopup  isPopCalled={isPopCalled} setIsPopCalled={setIsPopCalled} isPopup={isPopup} setIsPopup={setIsPopup} isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn}/>
    </div>
  );
};

export default Home;
