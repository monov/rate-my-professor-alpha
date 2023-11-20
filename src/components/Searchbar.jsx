import React, { useState } from "react";
import './Searchbar.css'
import { redirect, useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
      
  };
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
          <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
          <span className="text class-text">class</span>
          <span className="text prof-text">prof.</span>
        </label>
        </div>
        
      </div>
      
    </div>
  );
};

export default Searchbar;
