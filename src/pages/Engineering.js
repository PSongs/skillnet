import React, { useEffect } from "react";
import "../components/Engineering/Engineering.css";
import Engherologo from "../assets/ENG.png";
import Nav from "../components/Nav/Nav";
import Engconimg from "../assets/Vector 5.png";

const Engineering = () => {
  const handleWhatsAppChat = () => {
    window.open("https://wa.me//2347067575702", "_blank");
  };

  return (
    <div>
      <Nav />
      <div className="Eng-hero">
        <div className="Eng-hero-container">
          <h1>Engineering Services</h1> <br></br><br></br>
          <h3>
            Architectural Drawings <br></br>
            Civil Drawing <br></br>
            Mechanical Drawings <br></br>
            Electrical Drawings <br></br>
            Land Surveying <br></br>
            Borehole Drilling <br></br>
            Project/ Engineering Management
          </h3>
          <br></br><br></br><br></br>
          <button id="hero5-contact" onClick={handleWhatsAppChat}>
              <h3>
                  Chat Us
              </h3>
              <img className="Eng-5img" src={Engconimg} alt=""></img>
            </button>
        </div>
        <div className="Eng-hero-image">
          <img className="Eng-hero-img" src={Engherologo} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Engineering;
