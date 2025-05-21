import React from 'react'
import Intro from '../components/Intro'
import '../App.css'
import Content from '../components/Content'
import Date$Time from '../components/Date$Time'
import Gallery from '../components/Gallery'
import Location from '../components/Location'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div className='Home_Page'>
        <Intro/>
        <Content/>
        <Date$Time/>
        <Gallery/>
        <Location/>
        <Contact/>
    </div>
  )
}

export default HomePage