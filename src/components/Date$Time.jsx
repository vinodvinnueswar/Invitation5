import React from 'react'
import animals from '../images/cartoons/cartoons.png'
import Border2 from '../images/frames/Border2.png'

const Date$Time = () => {
  return (
    <div className="Date_Time">
        <div className="date">
            <h3>Date :</h3>
            <p>05-05-2025</p>
        </div>
        <div className="time">
            <h3>Time :</h3>
            <p>10:00AM</p>
        </div>
        <div className="venue">
            <h3>Venue</h3>
            <p>Near chaitanya grands , SBH Colony , Vishnu convention.</p>
        </div>
         <div className="animals">
         <img src={animals} alt="" />
        </div>
        <div className="Border2">
            <img src={Border2} alt="" />
        </div>

    </div>
  )
}

export default Date$Time