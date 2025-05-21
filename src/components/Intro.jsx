import React from 'react'
import Clouds from '../images/clouds/clouds1.jpg'
import Monkey from '../images/cartoons/cartoons2.png'
import Bamboo from '../images/frames/bamboo.png'
import BG from '../images/BG/BG5.jpg'

const Intro = () => {
  return (
    <div className="Intro_Container">
        <div className="Intro_Page">
            <img src={Clouds} alt="" />
            <img className='Monkey' src={Monkey} alt="" />
        </div>
        <div className="Bamboo">
        <img src={BG} alt="" />
        </div>
        <div className="BG">
            <img src={Bamboo} alt="" />

        </div>
        <div className="wishes">
            <p>Happy Birthday</p>
        </div>
    </div>
  )
}

export default Intro