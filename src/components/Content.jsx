import React from 'react'
import Baby from '../images/Baby/Baby.png'
import Border from '../images/frames/Border6.png'
import Border6 from '../images/frames/Border.jpg'

const Content = () => {
  return (
    <div className="Content_Container">
        <div className="bg">
            <img src={Border6} alt="" />
        </div>
       <div className="image" >
            <img src={Baby} alt="" />
        </div>
        <div className="Border">
        <img src={Border} alt="" />
        </div>
        <div className="details" data-aos="fade-up"
     data-aos-duration="3000">
            <h3>Anandh</h3>
            <p>🎉 Happy 1st Birthday, Sweet Baby! 🎂👶

Today we celebrate one whole year of giggles, snuggles, and unforgettable moments. From your first smile to your wobbly steps, every little milestone has filled our hearts with endless joy and wonder. You may be tiny, but you’ve brought an enormous amount of love into our lives. 💖</p>
        </div>
       
       </div>
  )
}

export default Content