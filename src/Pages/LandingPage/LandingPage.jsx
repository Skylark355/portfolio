import React from 'react'
import "./LandingPage.css"
import "../../Components/NavBar/NavBar"
import NavBar from '../../Components/NavBar/NavBar'
import Hero from '../../Components/Hero/Hero'
import Experience from '../../Components/Experience/Experience'

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Experience />
    </div>
  )
}

export default LandingPage
