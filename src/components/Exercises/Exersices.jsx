import React from 'react'
import '../../styles/exercises.css'
import dumbell2 from '../../assets/dumbell2.svg'
import meditate from '../../assets/meditate.svg'
import yoga from '../../assets/yoga.svg'
import yoga2 from '../../assets/yoga2.svg'

const Exersices = () => {
  return (
    <section className="home1" id="home1">
        <div className="content1">
            <h2>Benifits of <span className='highlights'>Exerises</span></h2>
            <p>A clean and simple ways to do Your daily Exercises. <br/>login from below to access our features.try it for free!!</p>
        </div>

        <div className="container">
          <div className="element">
            <div className="box-1">
              <img src={dumbell2}/>
              <h3>Increased Flexibility</h3>
            </div>
            <div className="box-2">
            <img src={meditate}/>
            <h3>Increased Flexibility</h3>
            </div>
            <div className="box-3">
            <img src={yoga}/>
            <h3>Decrease Heart Problems</h3>
            </div>
            <div className="box-4">
            <img src={yoga2}/>
            <h3>Increased Flexibility</h3>
            </div>
          </div>
        </div>
        
    </section>
  )
}

export default Exersices