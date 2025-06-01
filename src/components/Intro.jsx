import React from 'react'
import Clouds from '../images/clouds/clouds1.jpg'
import Monkey from '../images/cartoons/cartoons2.png'
import Bamboo from '../images/frames/bamboo.png'
import BG from '../images/BG/BG5.jpg'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Intro = () => {

 useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className="Intro_Container">
        <div className="Intro_Page">
            <img src={Clouds} alt="" />
            <img data-aos="zoom-in" className='Monkey' src={Monkey} alt="" />
        </div>
        <div className="Bamboo" >
        <img src={BG} alt=""  data-aos="flip-up"/>
        </div>
        <div className="BG">
            <img src={Bamboo} alt=""  data-aos="flip-up"/>

        </div>
        <div className="wishes">
            <p data-aos="flip-up">Birthday Party</p>
        </div>
    </div>
  )
}

export default Intro