import React from "react";
import "../components/Home/Home.css";
import herologo from "../assets/world_img.png";
import herothreelogo1 from "../assets/engineering image.png";
import herothreelogo2 from "../assets/logistics woman image.png";
import herothreelogo3 from "../assets/tech image.png";
import herofouricon from "../assets/Vector plus.png";
import herofivelogo from "../assets/hero 5.png";
import herofiveimg from "../assets/Vector 5.png";
import herosixlogo from "../assets/hero 6.png";
import { Link } from "react-router-dom";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
// import arrow from "../assets/up arrow.png";
import Nav from "../components/Nav/Nav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="hero">
        <div className="hero-container">
          <h1 className="hero-h1">
            SkillNet Integrated - Powering Logistics, Tech, Engineering
          </h1> <br></br>

          <h5 className="hero-h5">
            Welcome to SkillNet Integrated Services Limited, your one-stop
            destination for <br></br>cutting-edge solutions in logistics,
            technology, and engineering. We are your partners in driving
            innovation, efficiency, and success across these dynamic industries.
          </h5>  <br></br>

          <button className="hero6-contact">
              <h3>
                <Link className="hero6us" to="/contact">
                  Get Started
                </Link>
              </h3>
            </button>
        </div>
        <div className="hero-logo">
          <img className="hero-img" src={herologo} alt=""></img>
        </div>
      </div>

      {/* HERO TWO //////////////////////////////////////////////////////////////////////////// */}
      <div className="herotwo">
        <div className="hero-two-container">
          <h3>About Our Company</h3>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="Abt-Content-Wrap"
          >
            <SwiperSlide className="Abt-Content">
              <h2>OUR MISSION</h2>
              <h4>
                To provide efficient and innovative project management,
                engineering, technical and logistics services, through constant
                responsive approach, with open-mindedness, respect and honesty
                in our service delivery
              </h4>
            </SwiperSlide>
            <SwiperSlide className="Abt-Content">
              <h2>OUR VISION</h2>
              <h4>
                To attract global recognition and remain one name to beat in the
                business world, through our constant and deliberate commitment
                to customer’s / client’s service and satisfaction.
              </h4>
            </SwiperSlide>
            <SwiperSlide className="Abt-Content">
              <h2>WHAT WE DO FOR BUSINESS</h2>
              <h4>
                To provide efficient and innovative project management,
                engineering, technical and logistics services, through constant
                responsive approach, with open-mindedness, respect and honesty
                in our service delivery.
              </h4>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="herothree">
        {/* ENGINEERING SERVICES */}
        <div className="herothree-container">
          <div className="herothreelogo1">
            <img className="herothreeImg1" src={herothreelogo1} alt=""></img>
          </div>
          <div className="herothreetext">
            <h2 className="herothreetext1">Engineering Services</h2>
            <h5 className="herothreetext2">
              Build the future with our engineering prowess. <br></br>Our team
              of experienced engineers is ready to tackle complex projects, from
              civil, marine, electrical and structural engineering to advanced
              system design.
            </h5>
            <div className="herothreebox">
              <h5>
                <Link className="herothreereadmore" to="/engineering">
                  READ MORE
                </Link>
              </h5>
            </div>
          </div>
        </div>

        {/* LOGISTICS SERVICES */}
        <div className="herothree-container">
          <div className="herothreelogo1">
            <img className="herothreeImg1" src={herothreelogo2} alt=""></img>
          </div>
          <div className="herothreetext">
            <h2 className="herothreetext1">Logistics Services</h2>
            <h5 className="herothreetext2">
              Streamline your supply chain and distribution network with our
              state-of-the-art logistics services. From warehousing to
              transportation, we optimize your operations for maximum efficiency
              and cost-effectiveness.
            </h5>
            <div className="herothreebox">
              <h5>
                <Link className="herothreereadmore" to="/logistics">
                  READ MORE
                </Link>
              </h5>
            </div>
          </div>
        </div>

        {/* TECH SERVICES */}
        <div className="herothree-container">
          <div className="herothreelogo1">
            <img className="herothreeImg1" src={herothreelogo3} alt=""></img>
          </div>
          <div className="herothreetext">
            <h2 className="herothreetext1">Tech Services</h2>
            <h5 className="herothreetext2">
              Stay ahead in the fast-paced world of technology. Our tech experts
              provide solutions tailored to your needs. Whether you're looking
              for software development, cybersecurity, or IT infrastructure, we
              have you covered.
            </h5>
            <div className="herothreebox">
              <h5>
                <Link className="herothreereadmore" to="/tech">
                  READ MORE
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* HERO FOUR //////////////////////////////////////////////////////////////////////////// */}
      <div className="herofour">
        <div className="herofour-container">
          <div className="herofourtext1">
            <h1 className="herofourtxt1">Why Choose Us?</h1>
          </div>
          <div className="herofourtext2">
            {/* ONE */}
            <div className="herofour-con">
              <div className="herofour-con1">
                <h4>Proven Expertise:</h4>
                <button className="herofour-icon">
                  <img className="hero4-img" src={herofouricon} alt=""></img>
                </button>
              </div>
              <div className="herofour-con1">
                <h4>Innovative Solutions:</h4>
                <button className="herofour-icon">
                  <img className="hero4-img" src={herofouricon} alt=""></img>
                </button>
              </div>
            </div>
            {/* TWO */}
            <div className="herofour-con">
              <div className="herofour-con1">
                <h4>Tailored Approach:</h4>
                <button className="herofour-icon">
                  <img className="hero4-img" src={herofouricon} alt=""></img>
                </button>
              </div>
              <div className="herofour-con1">
                <h4>Global Reach:</h4>
                <button className="herofour-icon">
                  <img className="hero4-img" src={herofouricon} alt=""></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HERO FIVE //////////////////////////////////////////////////////////////////////////// */}
      <div className="herofive">
        <div className="herofive-container">
          <div className="herofive-logo">
            <img className="herofiveImg" src={herofivelogo} alt=""></img>
          </div>
          <div className="herofivetext">
            <div className="herotxt1">
              <h2 className="herofive1">Ready to Transform Your Business?</h2>{" "}
              <br></br>
            </div>

            <div className="herotxt2">
              <h4 className="herofive2">
                Is your business ready to take the leap? Discover how SkillNet
                Integrated can drive your logistics, technology, and engineering
                endeavors to new heights. We're here to turn your aspirations
                into achievements.
              </h4>
            </div>

            <br></br>
            <br></br>

            <div className="herotxt3">
              <h4 className="herofive3">
                Our team is eager to work with you and find the best ways to
                address your logistics, technology, and engineering needs.
                Contact us today to schedule a consultation and start your
                journey towards enhanced success.
              </h4>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <button className="hero5-contact">
              <h3>
                <Link className="hero5us" to="/contact">
                  Contact Us
                </Link>
              </h3>
              <img className="hero5img" src={herofiveimg} alt=""></img>
            </button>
          </div>
        </div>
      </div>

      {/* HERO SIX //////////////////////////////////////////////////////////////////////////// */}
      <div className="herosix">
        <div className="herosix-container">
          <div className="herosixtext">
            <div className="hero6txt1">
              <h2 className="herosix1">Join the SkillNet Community</h2>
            </div>

            <div className="hero6txt2">
              <h4 className="herosix2">
                Stay updated with the latest trends, news, and insights in
                logistics, technology, and engineering. Subscribe to our
                newsletter and follow us on social media for a dose of industry
                knowledge.
              </h4>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <button className="hero6-contact">
              <h3>
                <Link className="hero6us" to="/contact">
                  Get Started
                </Link>
              </h3>
            </button>
          </div>

          <div className="herosix-logo">
            <img className="herosixImg" src={herosixlogo} alt=""></img>
          </div>
        </div>
      </div>

      {/* FOOTER ////////////////////////////////////////////////////////////////////////////////// */}
      <div className="footer">
        <div className="footer-container">
          <div className="section1">
            <h3 className="footertxt1">Contact Us</h3>
            <br></br>
            <h5>
              Address: <br></br>
              113 Okporo Road, Port Harcourt, Rivers State, Nigeria{" "}
            </h5>

            <br></br>

            <h5>
              Phone: <br></br>
              +234 902 465 3072, +234 701 736 5824{" "}
            </h5>

            <br></br>

            <h5>
              Email: <br></br>
              skillnetintegrated219@gmail.com{" "}
            </h5>
          </div>
          <div className="section2">
            <div className="sectiontxt1">
              <div className="stxt1">
                <h3 className="footertxt1">Connect With Us</h3>
                <br></br>
                <h5>
                  Stay connected with SkillNet Integrated on social media:{" "}
                </h5>
                <div className="footersocials">
                  <img className="socials" src={twitter} alt=""></img>
                  <img className="socials" src={instagram} alt=""></img>
                  <img className="socials" src={facebook} alt=""></img>
                </div>
              </div>
              <div className="stxt2">
                <h3 className="footertxt1">News Letter Signup</h3>
                <br></br>
                <h5>
                  Stay informed about the latest industry trends and updates.
                  Subscribe to our newsletter.{" "}
                </h5>
              </div>
            </div>
            <div className="sectiontxt2">
              <input
                className="Home-input"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              ></input>
              <button className="Submit" type="submit">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        {/* COPY RIGHT //////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="copy-right">
          <h5>Copyright © 2024 SkillNet Integrated. All rights reserved.</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
