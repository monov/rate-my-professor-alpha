import React from "react";
import "./Infosection.css";
import { AiFillLock } from "react-icons/ai";
import { BsIncognito, BsPeopleFill } from "react-icons/bs";
import { DiOpensource } from "react-icons/di";

const Infosection = () => {
  return (
    <div className="app-info-section">
      <div className="app-infosection-pros">
        <AiFillLock className="ico"/>
        <p>End to End <br /> Encryption</p>
      </div>
      <div className="app-infosection-pros">
        <BsIncognito className="ico"/>
        <p>Anonymous</p>
      </div>
      <div className="app-infosection-pros">
        <DiOpensource className="ico"/>
        <p>Open Source</p>
      </div>
      <div className="app-infosection-pros">
        <BsPeopleFill className="ico"/>
        <p>For Students <br /> by Students</p>
      </div>
    </div>
  );
};

export default Infosection;
