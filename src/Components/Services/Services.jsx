import React, { useEffect } from "react";

// Impported icons ===>
import { GrYoga } from "react-icons/gr";
import { FaHiking,  FaDharmachakra } from "react-icons/fa";
import { MdDining } from "react-icons/md"
import { GiNails } from "react-icons/gi";
import { SiChartdotjs } from 'react-icons/si'
import { BsSoundwave } from 'react-icons/bs'




// import AOS ============================>
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="search container section">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer grid"
      >
        <div className="btns flex">
          {/* <div className="singleBtn ">
                    <span>Economy</span>
                </div> */}
          <div className="singleBtn active">
            <span>Services</span>
          </div>
          {/* <div className="singleBtn">
                    <span>Fast Class</span>
                </div> */}
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="searchInputs flex"
        >
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <GrYoga className="icon" />
            </div>
            <div className="texts">
              <h4>Yoga</h4>
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <FaHiking className="icon" />
            </div>
            <div className="texts">
              <h4>Hiking</h4>
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <GiNails className="icon" />
            </div>
            <div className="texts">
              <h4>Nail Standing</h4>
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <FaDharmachakra className="icon" />
            </div>
            <div className="texts">
              <h4>Chakra Training</h4>
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <SiChartdotjs className="icon" />
            </div>
            <div className="texts">
              <h4>Art Therapy</h4>
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <BsSoundwave className="icon" />
            </div>
            <div className="texts">
              <h4>Sound Therapy</h4>
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <MdDining className="icon" />
            </div>
            <div className="texts">
              <h4>Dining</h4>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Services;
