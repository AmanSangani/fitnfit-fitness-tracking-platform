import React from 'react'
import '../../styles/start.css'
import trainer from '../../assets/trainer.png'


const Start = () => {
  return (
    <section>
        <div className="container1">
            <div className="img_trainer">
                <img src={trainer} />
            </div>
            <div className="trainer">
                <h3>Ready to make a <span className='highlights'>Change</span>?</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda cupiditate minus consequatur odit atque adipisci sed placeat soluta rem. 
                    Sed dolores optio ut dolorem ipsum vel ipsam quos voluptatum molestias?
                </p>
                <button className="home-btn">Get Started</button>
            </div>
        </div>
    </section>
  )
}

export default Start