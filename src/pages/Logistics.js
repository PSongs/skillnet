import React from "react";
import "../components/Logistics/Logistics.css";
import Nav from "../components/Nav/Nav";
import herofiveimg from "../assets/Vector 5.png";

const Logistics = () => {
  const handleWhatsAppChat = () => {
    window.open("https://wa.me//2349024653072", "_blank");
  };

  return (
    <div>
      <Nav />
      <div className="Log-hero">
        <div className="Log-hero-container">
          <h1>Logistics Services</h1> <br></br>
          <div className='Services'><h4>Procurement Services</h4></div>
          <div className='Services'><h4>Freight Forwarding</h4></div>
          <div className='Services'><h4>Visa Payment</h4></div>
          <div className='Services'><h4>Dispatch & Delivery Services</h4></div>
          <div className='Services'><h4>Booking of Air Tickets & Accommodations</h4></div>
          <div className='Services'><h4> Vehicle Hiring Services</h4></div>
          <div className='Services'><h4>General Business Support</h4></div>
          
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

export default Logistics;
