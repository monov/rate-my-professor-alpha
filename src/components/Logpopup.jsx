import React, { useState } from "react";
import "./Logpopup.css";
import { MdCancel } from "react-icons/md";

const Logpopup = ({
  isPopup,
  setIsPopup,
  isPopCalled,
  setIsPopCalled,
  isUserLoggedIn,
  setIsUserLoggedIn,
  user,
  email,
  userShow,
  setUserShow,
  emailShow,
  setEmailShow,
}) => {
  const [isLogin, setIsLogin] = useState(false);
  const handleClick = async () => {
    setIsPopup((prevIsPopup) => !prevIsPopup);
    await setTimeout(() => {
      setIsPopCalled(true);
    }, 200);
  };

  const logClick = () => {
    setIsLogin(true);
  };
  const signClick = () => {
    setIsLogin(false);
  };

  return (
    <div
      className={
        isPopCalled
          ? isPopup
            ? "app-log-popup display-none"
            : "app-log-popup-not"
          : isPopup
          ? "app-log-popup"
          : "app-log-popup-not"
      }
    >
      <div onClick={handleClick} className="app-popup-esc">
        <MdCancel className="app-popup-esc-ico" />
      </div>
      {isUserLoggedIn ? (
        <LoggedIn
          userShow={userShow}
          setUserShow={setUserShow}
          emailShow={emailShow}
          setEmailShow={setEmailShow}
          email={email}
          user={user}
          setIsUserLoggedIn={setIsUserLoggedIn}
        />
      ) : (
        <NotLoggedIn
          userShow={userShow}
          setUserShow={setUserShow}
          emailShow={emailShow}
          setEmailShow={setEmailShow}
          isLogin={isLogin}
          logClick={logClick}
          signClick={signClick}
          setIsUserLoggedIn={setIsUserLoggedIn}
        />
      )}
    </div>
  );
};

export default Logpopup;

//APP LOGIN, login side of popup

const Applogin = ({
  isUserLoggedIn,
  setIsUserLoggedIn,
  setUserShow,
  setEmailShow,
}) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const api = import.meta.env.VITE_API_BASE_URL;

  const handleChangeU = (value) => {
    setUser(value);
  };

  const handleChangeP = (value) => {
    setPassword(value);
  };

  async function login() {
    const loginUsername = user;
    const loginPassword = password;

    const loginData = {
      username: loginUsername,
      password: loginPassword,
    };

    try {
      const response = await fetch(`${api}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "123",
        },
        credentials: "include",
        withCredentials: true,
        body: JSON.stringify(loginData),
      });

      if (response.status === 200) {
        console.log("vse chetka");
        let data = await response.json();
        setUserShow(loginUsername);
        setEmailShow(data.email);
        setIsUserLoggedIn(true);
      } else if (response.status === 401) {
        alert("Login failed. Please check your credentials.");
      } else {
        console.error("Login error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="app-login-wrapper">
      <input
        value={user}
        onChange={(e) => handleChangeU(e.target.value)}
        className="app-login-input username"
        placeholder="Username"
        type="text"
      />
      <input
        value={password}
        onChange={(e) => handleChangeP(e.target.value)}
        className="app-login-input password"
        placeholder="Password"
        type="password"
      />
      <div onClick={login} className="app-login-button">
        Log In
      </div>
    </div>
  );
};

// APP SIGN UP registartion side of Pop Up

const Appsignup = ({
  isUserLoggedIn,
  setIsUserLoggedIn,
  setUserShow,
  userShow,
  emailShow,
  setEmailShow,
}) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const api = import.meta.env.VITE_API_BASE_URL;
  const handleChangeU = (value) => {
    setUser(value);
  };

  const handleChangeE = (value) => {
    setEmail(value);
  };

  const handleChangeP = (value) => {
    setPassword(value);
  };

  function signup() {
    const signupEmail = email;
    const signupUsername = user;
    const signupPassword = password;

    const signupData = {
      username: signupUsername,
      email: signupEmail,
      password: signupPassword,
    };

    fetch(`${api}signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "123",
      },
      body: JSON.stringify(signupData),
      credentials: "include",
      withCredentials: true,
    })
      .then((response) => {
        if (response.status == 200) {
          console.log("Signup successful");
          setUserShow(signupUsername);
          setEmailShow(response.email);
          setIsUserLoggedIn(true);
        } else {
          alert("Signup failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div className="app-signup-wrapper">
      <input
        className="app-signup-input username"
        placeholder="Username"
        type="text"
        onChange={(e) => handleChangeU(e.target.value)}
      />
      <input
        className="app-signup-input email"
        placeholder="Email"
        type="email"
        onChange={(e) => handleChangeE(e.target.value)}
      />
      <input
        className="app-signup-input password"
        placeholder="Password"
        type="password"
        onChange={(e) => handleChangeP(e.target.value)}
      />
      <div className="app-signup-button" onClick={signup}>
        Sign Up
      </div>
    </div>
  );
};

// LOGGEDIN

const LoggedIn = ({ setIsUserLoggedIn, userShow, emailShow }) => {
  const api = import.meta.env.VITE_API_BASE_URL;
  const handleLogOut = async () => {
    setIsUserLoggedIn(false);
    try {
      const response = await fetch(`${api}logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        withCredentials: true,
      });

      if (response.status == 200) {
        setIsUserLoggedIn(false);
      } else {
        console.error(
          "Failed to fetch data:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="app-user-loggedin-wrapper">
      <div className="app-user-loggedin-show">Username: {userShow}</div>
      <div className="app-user-loggedin-show">Email: {emailShow}</div>
      <div className="app-signup-button" onClick={handleLogOut}>
        Log Out
      </div>
    </div>
  );
};

// NOT LOGGEDIN!!!!

const NotLoggedIn = ({
  emailShow,
  setEmailShow,
  isLogin,
  logClick,
  signClick,
  setIsUserLoggedIn,
  userShow,
  setUserShow,
}) => {
  const api = import.meta.env.VITE_API_BASE_URL;
  return (
    <>
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

      <a href={`${api}login/oauth2`} className="app-signup-google">Sign Up with Google</a>
      <div className="app-log-popup-lines">
        <div className="app-popup-line"></div>
        <div className="app-popup-line-text">Or</div>
        <div className="app-popup-line"></div>
      </div>

      <div className="app-login-signup-wrapper">
        {isLogin ? (
          <Applogin
            setIsUserLoggedIn={setIsUserLoggedIn}
            userShow={userShow}
            setUserShow={setUserShow}
            emailShow={emailShow}
            setEmailShow={setEmailShow}
          />
        ) : (
          <Appsignup
            setIsUserLoggedIn={setIsUserLoggedIn}
            userShow={userShow}
            setUserShow={setUserShow}
            emailShow={emailShow}
            setEmailShow={setEmailShow}
          />
        )}
      </div>
    </>
  );
};
