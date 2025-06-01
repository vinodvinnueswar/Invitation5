import React from 'react'
import ReactPlayer from 'react-player'

const Videos = () => {
  return (

     <div className="videos-Container" >
            <h3>Video</h3>
            <div className="Video" data-aos="flip-up">
                      <ReactPlayer 
                         className='react-player'
                       url='https://youtu.be/uFViSOXg2ns?si=BlXPIW2KgwRz5P1v'
                       width = '100%'
                       height='100%'
                        />
            </div>
           
      </div>
  )
}

export default Videos