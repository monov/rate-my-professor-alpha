import React from "react";
import "./Navbar.css";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = ({isPopup, setIsPopup, setIsPopCalled}) => {
  const handleClick = async () => {
    await setTimeout(() => { setIsPopup(false)}, 200)
    setIsPopCalled(false)
  }
  return (
    <div className={isPopup ? "app-navbar" : "app-navbar blur"}>
      <div className="app-logo">LOGO</div>
      <div className="app-account">
        <div className="app-account-pfp-wrapper" onClick={handleClick}>
          <BsFillPersonFill className="app-account-pfp"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
