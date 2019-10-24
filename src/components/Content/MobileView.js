import React, { useContext } from "react";
import SkylineBG from './SkylineBG'
import ThemeContext from "./ThemeContext"
import HeyThereHero from './HeyThereHero'


const mobileViewBox = '100 0 475 420'

const heroViewBox = "0 0 510 163"


const MobileView = () => {

  const [theme] = useContext(ThemeContext)

  return (
  <div >
    <HeyThereHero  viewbox={heroViewBox} heroWidth='75vw' />
    <SkylineBG 
      fillColor={theme.fillColor}
      viewbox={mobileViewBox}/>
  </div>
  )
}

export default MobileView
