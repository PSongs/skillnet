import React from "react";
import "../components/Logistics/Logistics.css";
import Engherologo from "../assets/LOG.png";
import Nav from "../components/Nav/Nav";
import { Link } from "react-router-dom";
import Engconimg from "../assets/Vector 5.png";

const Logistics = () => {
  const handleWhatsAppChat = () => {
    window.open("https://wa.me//2349024653072", "_blank");
  };

  return (
    <div>
      <Nav />
      <div className="Log-hero">
        <div className="Log-hero-image">
          <img className="Log-hero-img" src={Engherologo} alt=""></img>
        </div>
        <div className="Log-hero-container">
          <h1>Logistics Services</h1> <br></br>
          <h3>
            Procurement Services <br></br>
            Freight Forwarding <br></br>
            Visa Payment<br></br>
            Dispatch & Delivery Services<br></br>
            Booking of Air Tickets & Accommodations<br></br>
            Vehicle Hiring Services<br></br>
            General Business Support
          </h3>
          <br></br> <br></br>
          <button id="hero5-contact" onClick={handleWhatsAppChat}>
            <h3>
                Contact Us
            </h3>
            <img className="Eng-5img" src={Engconimg} alt=""></img>
          </button>
          <br></br>
          <Link className="Track" to="/tracking">Track your goods here</Link>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
