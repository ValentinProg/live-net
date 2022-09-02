import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
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