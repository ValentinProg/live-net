import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Pricing from '../../components/Pricing/Pricing'
import {  homeObjFour, homeObjOne, homeObjTwo, homeObjThree, } from './Data'

function Home() {
  return (
    <>
        <HeroSection {...homeObjOne} />    
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjTwo} />
        <Pricing/>
        <HeroSection {...homeObjFour} />
    </>
  )
}

export default Home