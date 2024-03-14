import React from 'react';
import "../components/Engineering/Engineering.css";
import Engherologo from "../assets/TEC.png";
import Nav from "../components/Nav/Nav";
import Engconimg from "../assets/Vector 5.png";

const Tech = () => {
    const handleWhatsAppChat = () => {
      window.open("https://wa.me//2347067575702", "_blank");
    };

  return (
    <div>
      <Nav />
      <div className="Eng-hero">
        <div className="Eng-hero-container">
          <h1>Tech Services</h1> <br></br>
          <h3>
          Desktop Publishing <br></br>
          Diploma Programme in Computer Hardware<br></br>
          Certificate Programme in Computer <br></br>
          Programming <br></br>
          Networking<br></br> 
          Accounting Package<br></br>
          Oil and Gas Software<br></br> 
          Computer Aided Design<br></br> 
          Engineering Software<br></br> 
          Graphics Design <br></br>
          Structural Analysis<br></br>
          Data Analysis<br></br>
          Web Design/Hosing<br></br> 
          Project Management<br></br>
          Data Base Management<br></br>
          </h3>
          <br></br><br></br>
          <button className="hero5-contact" onClick={handleWhatsAppChat}>
              <h3>
                  Contact Us
              </h3>
              <img className="Eng-5img" src={Engconimg} alt=""></img>
            </button>
        </div>
        <div className="Eng-hero-image">
          <img className="Eng-hero-img" src={Engherologo} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default Tech