import React from "react";
import "../components/Tracking/Tracking.css";
import TrackLogo from "../assets/SKILLNET LOGO 13.png";
import { Link } from "react-router-dom";

const Tracking = () => {
  return (
    <div>
      <div className="Tracking-hero">
        <div className="Tracking-Logo">
          <img className="Track-img" src={TrackLogo} alt=""></img>
        </div>
        <Link className="Track-Back" to="/logistics"><h3>Back</h3></Link>
        <div className="Tracking-Container">
          <div className="Tracking-Container-Opp">
            <div className="Track-body">
            <input
              className="Track-input"
              type="input"
              name="input"
              placeholder="Input tracking ID/ Alphacode"
              required
            ></input>
            <button className="Track-Btn" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
