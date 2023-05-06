import React , {useEffect} from 'react'

//Imported Destination Images ====>
import Miami from '../../assets/Miami.png'
import Arizona from '../../assets/hikingArizona.png'
import Canyon from '../../assets/antilopeCanyon.png'
import Oceandrive from '../../assets/Oceandrive.png'

//Imported Travelers Images ====>
import traveler1 from '../../assets/user (1).png'
import traveler2 from '../../assets/user (2).png'
import traveler3 from '../../assets/user (3).png'
import traveler4 from '../../assets/user (4).png'

 // import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
   {
    id: 1,
    destinationImage: Arizona,
    travelerImage: traveler2,
    travelerName: 'Saida Keigh',
    review: "The retreat was a truly transformative experience, and I feel so much more grounded and centered than before."
   },
   {
    id: 2,
    destinationImage: Miami,
    travelerImage: traveler1,
    travelerName: 'Galina Kim',
    review: "I came back from the retreat feeling rejuvenated and reconnected with my inner self."
   },
   {
    id: 3,
    destinationImage: Canyon,
    travelerImage: traveler3,
    travelerName: 'Nicole Kerry',
    review: "The retreat gave me a sense of community and belonging that I've been missing for a long time, and I feel grateful for the experience."
    },
     {
    id: 4,
    destinationImage: Oceandrive,
    travelerImage: traveler4,
    travelerName: 'Naresh Lamer',
    review: "I was nervous about going to the retreat, but it turned out to be a wonderful opportunity for growth and reflection."
   }
]

const Travelers = () => {

   
     useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div className='travelers container section'>
        <div className="sectionContainer">
            <h2 data-aos="fade-down" data-aos-duration="2500">What People Say About Us</h2>

            <div className="travelersContainer grid">
                {
                    travelers.map(({id, destinationImage, travelerImage, travelerName, review}) =>{
                        return(
                            <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">
                                <img src={destinationImage} className='destinationImage'/>
                                <div className="travelerDetails">
                                    <div className="travelerPicture">
                                        <img src={travelerImage} className='travelerImage'/>
                                    </div>
                                    <div className="travelerName">
                                        <span>{travelerName}</span>
                                        <p>{review}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Travelers