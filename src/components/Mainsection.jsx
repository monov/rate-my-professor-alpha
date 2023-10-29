import React from "react";
import "./Mainsection.css";
import Searchbar from "./Searchbar";
import Infosection from "./Infosection";

const Mainsection = ({ isPopup, setIsPopup }) => {
  return (
    <div className="app-mainsection-main-wrapper">
      <div className="app-mainsection">
        <div className="app-mainsection-text-search-wrapper">
          <div className="app-mainsection-text-wrapper">
            <p>
              200 Professors <br />
              1.2k ratings <br />
              120 comments <br />
            </p>
          </div>

          <Searchbar />
        </div>
      </div>
      <div className="app-construct-blox">
        <Infosection />
        <div className="app-main-last-comment">Last Comment</div>
      </div>
    </div>
  );
};

export default Mainsection;
