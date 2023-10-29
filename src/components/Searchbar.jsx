import React from "react";
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className="app-mainsection-search-wrapper">
      <div className="app-mainsection-search-input-wrapper">
        <input type="text" placeholder="Search by class..." />
      </div>
      <p>I'd like to look up a <span>professor</span> by name</p>
    </div>
  );
};

export default Searchbar;
