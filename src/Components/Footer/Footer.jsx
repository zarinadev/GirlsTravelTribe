import React, { useEffect, useState } from "react";

// Imported icons ==========>
import { BsInstagram } from "react-icons/bs";

//Imported Images ===>
import Logo from "../../assets/logo1.png";

// import AOS ============================>
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const [linkUrl, setLinkUrl] = useState("");

  const handleClick = () => {
    setLinkUrl("https://instagram.com/girlstraveltribe?igshid=YmMyMTA2M2Y=");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="gridOne grid"
        >
          <div className="logoDiv">
            <img src={Logo} className="Logo" />
          </div>
          <p>Girls Travel Tribe - A Journey to Self-Discovery!</p>
          <div className="socialIcons flex">
            <a href={linkUrl} onClick={handleClick}>
              <BsInstagram className="icon" />
            </a>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="footerLinks"
        >
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="#">FAQ</a>
          </li>

          <li>
            <a href="#">Our community</a>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="footerLinks"
        >
          <span className="linkTitle">Queries</span>

          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Programm Rules</a>
          </li>
        </div>
      </div>

      <div className="copyrightDiv flex">
        <p>Girls Travel Tribe, 2023 </p>
      </div>
    </div>
  );
};

export default Footer;
