import React, { useContext } from "react";
import SkylineBG from './SkylineBG'
import ThemeContext from "./ThemeContext"


const mobileView = '100 0 475 420'




const MobileView = () => {

  const [theme] = useContext(ThemeContext)

  return (
  <div className='container box'>
    <SkylineBG 
    fillColor={theme.fillColor}
    viewbox={mobileView}/>
  </div>
  )
}

export default MobileView
