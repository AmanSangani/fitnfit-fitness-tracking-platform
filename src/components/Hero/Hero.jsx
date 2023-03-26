import React from 'react'
import '../../styles/hero.css'
import heroImg from '../../assets/heroImg.png'
import dumbell from '../../assets/dumbell.svg'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  
  return (
    <section className="home" id="home">
        <div className="content">
            <h1>Exercise is the key to a <br/> <span className='highlights'>Healthy</span> lifestyle</h1>
            <p>A clean and simple ways to do Your daily Exercises. login from below to access our features.     try it for free!!</p>

            <button className="home-btn">Get Started</button>
            <button className="home-btn2"><span><FontAwesomeIcon icon={faPlay} size="2xl"/></span>Watch</button>
        </div>

        
        <div className="box_img">
          <img src={heroImg} />
        </div>
        
    </section>

  )
}

export default Hero