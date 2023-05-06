import React from 'react'

//Imported Images ===>
import video from '../../assets/womenSmiles.mp4'




const Home = () => {
  return (
    <div className='home flex container'>
        <div className="mainText">
            <h1>Girls Travel Tribe</h1>
            <h3>Escape the chaos, embrace the peace:
              <br />
               Retreat with us.</h3>
        </div> 
        <div className="homeImages flex">
          <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
          </div>
         
          
        </div>
    </div>
  )
}

export default Home