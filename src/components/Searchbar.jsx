import React from "react";
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className="app-mainsection-search-wrapper">
      <div className="app-mainsection-search-input-wrapper">
        <input type="text" placeholder="Search by class..." />
        <div className="app-search-toggle-wrapper">
          <div className="app-search-toggle">
            <div className="app-search-toggle-switch"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
