import React, { useState } from "react";
import './Searchbar.css'
import { redirect, useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState('');
  const [slider, setSlider] = useState()
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSlider = ( ) => {
    setSlider(v => !v)
    console.log(slider)
  }
  const handleRedirect = (e)=>{
    if(e.key == 'Enter'){
      console.log(e.key)
      navigate(`./professors?search=${inputValue}`)
    }
  }

  return (
    <div className="app-mainsection-search-wrapper">
      <div className="app-mainsection-search-input-wrapper">
        <input type="text"
        onChange={handleInputChange}
        onKeyDown={handleRedirect}
        value={inputValue}
        placeholder="Search by class..." />
        <div className="switch-wrapper">
          <div onClick={handleSlider} className={`switch ${slider ? "class" : "prof"}`}>
            <div  className="slider"></div>
            <span className={slider ? "none" : ""}>class</span>
            <span className={slider ? "" : "none"}>prof.</span>
          </div>
        
        </div>
        
      </div>
      
    </div>
  );
};

export default Searchbar;
