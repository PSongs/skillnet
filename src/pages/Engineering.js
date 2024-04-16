import React, { useEffect } from "react";
import "../components/Engineering/Engineering.css";
import Nav from "../components/Nav/Nav";
import herofiveimg from "../assets/Vector 5.png";

const Engineering = () => {
  const handleWhatsAppChat = () => {
    window.open("https://wa.me//2349024653072", "_blank");
  };

  return (
    <div>
      <Nav />
      <div className="Eng-hero">
        <div className="Eng-hero-container">
          <h1>Engineerng Services</h1> <br></br>
          <div className='Services'><h4>Architectural Drawings</h4></div>
          <div className='Services'><h4>Civil Drawing</h4></div>
          <div className='Services'><h4>Mechanical Drawings</h4></div>
          <div className='Services'><h4>Electrical Drawings</h4></div>
          <div className='Services'><h4>Land Surveying</h4></div>
          <div className='Services'><h4>Borehole Drilling</h4></div>
          <div className='Services'><h4>Project/ Engineering Management</h4></div>
         
          <button id="service-contact" onClick={handleWhatsAppChat}>
              <h3>
                  Contact Us
              </h3>

              <img className="hero5img" src={herofiveimg} alt=""></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Engineering;
