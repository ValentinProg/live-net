import React from 'react'
import HeroSection from '../../HeroSection'
import {  homeObjFour, homeObjOne, homeObjTwo, homeObjThree, } from './Data'

function Home() {
  return (
    <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} />
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjFour} />
    </>
  )
}

export default Home