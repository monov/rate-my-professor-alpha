import React, { useState } from "react";
import "./Logpopup.css";
import { MdCancel } from "react-icons/md";

const Logpopup = ({ isPopup, setIsPopup, isPopCalled, setIsPopCalled }) => {
  const [isLogin, setIsLogin] = useState(false);
  const handleClick = async () => {
    setIsPopup((prevIsPopup) => !prevIsPopup);
    await setTimeout(() => {setIsPopCalled(true)}, 200)
    console.log(isPopCalled)
  };

  const logClick = () => {
    setIsLogin(true);
  };
  const signClick = () => {
    setIsLogin(false);
  };

  return (
    <div className={isPopCalled ? (isPopup ? "app-log-popup display-none" : "app-log-popup-not") : (isPopup ? "app-log-popup" : "app-log-popup-not")}>
      <div onClick={handleClick} className="app-popup-esc">
        <MdCancel className="app-popup-esc-ico" />
      </div>
      <div className="app-buttons-wrapper">
        <div
          className={isLogin ? "app-buttons login" : "app-buttons login-not"}
          onClick={logClick}
        >
          Log In
        </div>

        <div
          className={isLogin ? "app-buttons signup-not" : "app-buttons signup"}
          onClick={signClick}
        >
          Sign Up
        </div>
      </div>

      <div className="app-signup-google">Sign Up with Google</div>
      <div className="app-log-popup-lines">
        <div className="app-popup-line"></div>
        <div className="app-popup-line-text">Or</div>
        <div className="app-popup-line"></div>
      </div>

      <div className="app-login-signup-wrapper">
        {isLogin ? <Applogin /> : <Appsignup />}
      </div>
    </div>
  );
};

export default Logpopup;

const Applogin = () => {
  return (
    
    <div className="app-login-wrapper">
      <input className="app-login-input username" placeholder="Username" type="text" />
      <input className="app-login-input password" placeholder="Password" type="text" />
      <div className="app-login-button">Log In</div>
    </div>

  );
};

const Appsignup = () => {
  return <>2</>;
};
