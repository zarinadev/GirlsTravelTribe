import React, {useEffect} from 'react'

// Imported Images =======>
import beach from '../../assets/beach2.png'
// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'
const Lounge = () => {  
    useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 
  return (
    <div className='lounge container section'>
         <div className="sectionContainer grid">
           <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
             <img src={beach} alt="beach" />
           </div>
           <div className="textDiv">
            <h2 data-aos="fade-down" data-aos-duration="2500">Event activities</h2>

            <div className="grids grid">
                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                    <span className="gridTitle">
                        Hiking
                    </span>
                    <p>
                    We will have hiking as one of our activities during the retreat. Our hiking trails will vary in difficulty, and our experienced guides will provide insights about the local flora and fauna. Join us for a memorable hiking experience!
                    </p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                    <span className="gridTitle">
                        Boating
                    </span>
                    <p>
                    Join us for a tailored boating experience during the retreat! Explore the stunning scenery from the water, guided by our team who will provide insights about the local area. Whether you're a seasoned boater or a beginner, we've got you covered for a fun and memorable adventure.
                    </p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                    <span className="gridTitle">
                       Photoshooting
                    </span>
                    <p>
                    Capture your memories with a professional photoshoot during the retreat! Our photographer will provide high-quality images of you in the beautiful surroundings, tailored to your needs. Receive digital copies of your photos and keep them as a cherished memento of your time with us.
                    </p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                    <span className="gridTitle">
                       Creative art activity
                    </span>
                    <p>
                    Encourage self-expression and creativity through workshops and activities centered around art, music, dance, or writing. 
                    </p>
                </div>
            </div>
           </div>
         </div>
    </div>
  )
}

export default Lounge