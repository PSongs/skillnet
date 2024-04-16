import React from 'react';
import "../components/Tech/Tech.css";
import Nav from "../components/Nav/Nav";
import herofiveimg from "../assets/Vector 5.png";

const Tech = () => {
    const handleWhatsAppChat = () => {
      window.open("https://wa.me//2349024653072", "_blank");
    };

  return (
    <div>
      <Nav />
      <div className="Tec-hero">
        <div className="Tec-hero-container">
          <h1>Tech Services</h1> <br></br>
          <div className='Services'><h4>Desktop Publishing</h4></div>
          <div className='Services'><h4>Diploma Programme in Computer Hardware</h4></div>
          <div className='Services'><h4>Certificate Programme in Computer</h4></div>
          <div className='Services'><h4>Programming</h4></div>
          <div className='Services'><h4>Networking</h4></div>
          <div className='Services'><h4> Accounting Package</h4></div>
          <div className='Services'><h4>Oil and Gas Software</h4></div>
          <div className='Services'><h4> Computer Aided Design</h4></div>
          <div className='Services'><h4>Engineering Software</h4></div>
          <div className='Services'><h4>Graphics Design</h4></div>
          <div className='Services'><h4>Structural Analysis</h4></div>
          <div className='Services'><h4>Data Analysis</h4></div>
          <div className='Services'><h4>Web Design/Hosing</h4></div>
          <div className='Services'><h4> Project Management</h4></div>
          <div className='Services'><h4>Data Base Management</h4></div>
          
          <button id="service-contact" onClick={handleWhatsAppChat}>
              <h3>
                  Contact Us
              </h3>

              <img className="hero5img" src={herofiveimg} alt=""></img>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tech