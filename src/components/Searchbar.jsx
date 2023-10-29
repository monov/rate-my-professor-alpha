import React from "react";
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className="app-mainsection-search-wrapper">
      <div className="app-mainsection-search-input-wrapper">
        <input type="text" placeholder="Search by class..." />
        <div className="search-input-button-toggle"></div>
      </div>
    </div>
  );
};

export default Searchbar;
