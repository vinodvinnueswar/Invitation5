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
       <div className="image">
            <img src={Baby} alt="" />
        </div>
        <div className="Border">
        <img src={Border} alt="" />
        </div>
        <div className="details">
            <h3>Anandh</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eligendi ullam distinctio obcaecati, qui nobis molestias suscipit repellendus beatae autem esse magnam nam similique veritatis at et atque culpa maiores?</p>
        </div>
       
       </div>
  )
}

export default Content