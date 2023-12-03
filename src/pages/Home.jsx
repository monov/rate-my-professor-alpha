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
  const [userShow, setUserShow] = useState("");
  const [emailShow, setEmailShow] = useState("");
  const api = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    auth();
  }, []);
 
  const auth = async () => {
    try {
      const response = await fetch(`${api}auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        withCredentials: true,
      });

      if (response.status == 200) {
        const data = await response.json();
        console.log(data.email, data.username);
        setIsUserLoggedIn(true);
        setUserShow(data.username);
        setEmailShow(data.email);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="app-home-wrapper">
      <Navbar
        setIsPopCalled={setIsPopCalled}
        isPopup={isPopup}
        setIsPopup={setIsPopup}
      />
      <Mainsection isPopup={isPopup} setIsPopup={setIsPopup} />
      <Logpopup
        userShow={userShow}
        setUserShow={setUserShow}
        emailShow={emailShow}
        setEmailShow={setEmailShow}
        isPopCalled={isPopCalled}
        setIsPopCalled={setIsPopCalled}
        isPopup={isPopup}
        setIsPopup={setIsPopup}
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
    </div>
  );
};

export default Home;
