import React, { useEffect } from "react";

//Imported Images
import image1 from "../../assets/beach1.png";
import image2 from "../../assets/circle.png";

// import AOS ============================>
import Aos from "aos";
import "aos/dist/aos.css";

const Support = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>Retreat travel support</small>
          <h2>Plan your retreat with confindence</h2>
          <p>
            Find help with booking retreat plans, see what to expect along the
            journey!
          </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleInfo"
            >
              <span className="number">01</span>
              <h4>We support along the journey</h4>
              <p>
                We support you from picking you up at the airport to bringing
                you back
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="3500"
              className="singleInfo"
            >
              <span className="number colorOne">02</span>
              <h4>Comfortable Lounging</h4>
              <p>
                A private, cozy lodging, and beautiful setting to relax and
                unwind during your women's spiritual retreat. Full board meals
                will be provided{" "}
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="4500"
              className="singleInfo"
            >
              <span className="number colorTwo">03</span>
              <h4>Indoor and Outdoor Activities</h4>
              <p>Guided indoor and outdoor activities will be provided.</p>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
            <div
              data-aos="fade-left"
              data-aos-duration="2500"
              className="gridImage"
            >
              <img src={image1} alt="" />
              <div
                data-aos="fade-right"
                data-aos-duration="2500"
                className="gridImage"
              >
                <img src={image2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
