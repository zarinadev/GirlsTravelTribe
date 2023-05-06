import React, {useEffect} from 'react'

// Impoorted Icons ===========>
import {RxCalendar} from 'react-icons/rx'
import {MdQuestionAnswer} from 'react-icons/md'
import { ImBook } from 'react-icons/im'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Info = () => {

     useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])  

  return (
    <div className='info section'>
        <div className="infoContainer container">
            <div className="titleDiv flex">
                <h2 data-aos="fade-right" data-aos-duration="2500">Travel to make memories around the US</h2>
                            </div>
            <div className="cardsDiv grid">
                <div data-aos="fade-up" data-aos-duration="2500" className="singleCard grid">
                    <div className="iconDiv flex">
                        <RxCalendar className='icon'/>
                    </div>
                    <span className="cardTitle">Book & Relax</span>
                    <p> We've got you covered when it comes to accommodation and dining, so there's no need to worry about booking either.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="3500" className="singleCard grid">
                    <div className="iconDiv flex colorOne">
                        <ImBook className='icon'/>
                    </div>
                    <span className="cardTitle">Smart Book</span>
                    <p> You will be provided with a hard copy of the program, which outlines all of the activities scheduled for the duration of the event. </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="4500" className="singleCard grid">
                    <div className="iconDiv flex colorTwo">
                        <MdQuestionAnswer className='icon'/>
                    </div>
                    <span className="cardTitle">Get answers for your questions</span>
                    <p> Our practices can help to explore your inner world, find answers to exciting questions that you may have been pondering for some time.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Info