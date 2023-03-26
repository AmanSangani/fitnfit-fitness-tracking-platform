import React from 'react'
import '../../styles/price.css'

const Price = () => {
  return (
    <section className='home1'>
        <div className="home1">
            <div className="content1">
                <h2>Gym <span className='highlights'>Pricing</span></h2>
                <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus earum enim ea esse, velit iste laborum obcaecati. <br/>
                    Saepe omnis nesciunt, aspernatur alias ipsam maiores? 
                    Facilis hic dolor amet magni optio?
                </p>
            </div>
        </div>
        <div className="container3">
            <div className="card">
                <h3>Regular Member</h3>
                <h4><span className='price'>$50</span>/month</h4>
                <hr/>
                <ul>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                </ul>
                <div className='button'><button className='btn1'>Join Now</button></div>
            </div>
            <div className="card">
                <h3>Regular Member</h3>
                <h4><span className='price'>$50</span>/month</h4>
                <hr/>
                <ul>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                </ul>
                <div className='button'><button className='btn1'>Join Now</button></div>
            </div>
            <div className="card">
                <h3>Regular Member</h3>
                <h4><span className='price'>$50</span>/month</h4>
                <hr/>
                <ul>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                    <li>unlimited access</li>
                </ul>
                <div className='button'><button className='btn1'>Join Now</button></div>
            </div>
        </div>
    </section>
  )
}

export default Price