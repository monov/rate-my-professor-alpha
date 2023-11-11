import React from "react";
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className="app-mainsection-search-wrapper">
      <div className="app-mainsection-search-input-wrapper">
        <input type="text" placeholder="Search by class..." />
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
