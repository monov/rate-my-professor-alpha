import React, { useEffect, useState } from "react";
import "./Mainsection.css";
import Searchbar from "./Searchbar";
import Infosection from "./Infosection";

const Mainsection = ({ isPopup, setIsPopup }) => {
  const api = import.meta.env.VITE_API_BASE_URL;
  const [profName, setProfName] = useState()
  const [rate, setRate] = useState()
  const [userName, setUserName] = useState()
  const [comment, setComment] = useState()

  useEffect(() => {
    lastComment();
  }, []);
  const lastComment = async () => {
      const response = await fetch(`${api}reviews/last`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json()
      setProfName(data.profId)
      setRate(data.rating)
      setUserName (data.userId)
      setComment(data.reviewText)
  };
  return (
    <div className="app-mainsection-main-wrapper">
      <div className="app-mainsection">
        <div className="app-mainsection-text-search-wrapper">
          <div className="app-mainsection-text-wrapper">
            <p>
              <span className="text-logo">LOGO</span> <br />
              Enter the class name to get started
            </p>
          </div>

          <Searchbar />
        </div>
      </div>
      <div className="app-construct-blox">
        <Infosection />
        <div className="app-main-last-comment">
          <div className="app-main-last-comment-wrapper">
            <div className="app-lastcomment-rate-wrapper">
              <div className="app-lastcomment-rate">{rate}</div>
            </div>
            <div className="app-main-last-comment-rest">
              <div className="app-lastcomment-userName">
                {userName}
              </div>

              <div className="app-lastcomment-profname">
                Professor: <span>&nbsp;{profName}&nbsp;</span>
              </div>
              <div className="app-lastcomment-comment">
                {comment}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
