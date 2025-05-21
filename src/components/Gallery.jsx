import React, { useState } from 'react'
import Img1 from '../images/Baby/Baby1.png'
import Img2 from '../images/Baby/Baby2.png'
import Img3 from '../images/Baby/Baby3.png'
import Img4 from '../images/Baby/Baby4.png'
import Img5 from '../images/Baby/Baby6.png'
import Img6 from '../images/Baby/Baby7.png'

const Gallery = () => {
    
   const data = [
        {
            image: Img1
        },
        {
            image: Img2
        },
        {
            image: Img3
        },
        {
            image: Img4
        },
        {
            image: Img5
        },
        {
            image: Img6
        },
   ]
   const [active ,setActive] = useState(0);
      const handleClick = (index) => {
       setActive(index);
     };

  return (
    <div className="Gallery_Container">
         <h4>Gallery</h4>
        <div className="Gallery">
            {
                data.map((item , index) => {
                    return(
                        <div className="Baby_images" key={index}>
                           
                            <div className={ index === active ? "active" : ""} onClick={() => handleClick(index)}>
                            <img src={item.image} alt="" />
                            </div>

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Gallery