import React, { useState } from "react";
import "./Searchbar.css";
import { redirect, useNavigate, useParams } from "react-router-dom";

const Searchbar = ({isMainPage}) => {
  const [inputValue, setInputValue] = useState("");
  const [slider, setSlider] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSlider = () => {
    setSlider((v) => !v);
    console.log(slider);
  };
  const handleRedirect = (e) => {
    const currentPath = window.location.pathname;

    const newPath = currentPath.replace(/\/professors\/(.*)/, `/professors/${inputValue}`)

      if (e.key == "Enter" && inputValue) {
        navigate(isMainPage ? `./professors/${inputValue}?searchByClass=${!slider}` : newPath + `?searchByClass=${!slider}`);
      }

  };

  return (
      <div className="app-mainsection-search-input-wrapper">
        <input
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleRedirect}
          value={inputValue}
          placeholder={
            slider ? "Search by professor name..." : "Search by class..."
          }
        />
        <div className="switch-wrapper">
          <div
            onClick={handleSlider}
            className={`switch ${slider ? "class" : "prof"}`}
          >
            <div className="slider"></div>
            <span className={slider ? "none" : ""}>class</span>
            <span className={slider ? "" : "none"}>prof.</span>
          </div>
        </div>
      </div>
  );
};

export default Searchbar;
