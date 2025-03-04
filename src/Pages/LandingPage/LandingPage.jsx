import React from 'react'
import "./LandingPage.css"
import "../../Components/NavBar/NavBar"
import NavBar from '../../Components/NavBar/NavBar'
import Hero from '../../Components/Hero/Hero'

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  )
}

export default LandingPage
