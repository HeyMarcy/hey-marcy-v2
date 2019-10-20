import React, { useContext } from "react"
import SkylineBG from './SkylineBG'
import HeyThereHero from './HeyThereHero'
import { useWindowDimensions } from '../WindowDimensionsProvider'
import ThemeContext from './ThemeContext'



// const mobileView = '100 0 475 420'
const mobileLandscapeViewBox = '10 0 1420 420'
// const laptopView = '100 0 1100 420'
const desktopViewBox = '50 0 1300 420'

const heroViewBox = "0 0 510 163"


const DesktopView = () => {
  const { width } = useWindowDimensions()
  const [theme] = useContext(ThemeContext)

  return (
    <div className='section'>
      <HeyThereHero 
        viewbox={heroViewBox} 
        heroWidth={
          (width > 670 && width < 1088 ? '85%':'40%' )
        } >
        
      </HeyThereHero>
        <SkylineBG 
          fillColor={theme.fillColor}
          viewbox={
            (width > 414 && width < 1088 ? mobileLandscapeViewBox:desktopViewBox )
          }
           />

      </div>
  )
}

export default DesktopView
