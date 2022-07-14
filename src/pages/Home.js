import React, {useState} from 'react'
import SideBar from '../components/SideBar/SideBar'
import NavBar from '../components/NavBar/NavBar'
import HeroSection from '../components/Hero/HeroSection'
import InfoSection from '../components/InfoSection/InfoSection'

import { homeObjOne, projects } from '../components/InfoSection/Data'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...projects}/>
    </>
  )
}

export default Home