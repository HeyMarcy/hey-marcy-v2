import React, { useContext } from "react";
// import classNames from 'classnames'
import SkylineBG from './SkylineBG'
// import Tile from './Tile'
import { useWindowDimensions } from '../WindowDimensionsProvider'
import ThemeContext from "./ThemeContext"



const mobileView = '100 0 475 420'
const mobileLandscapeView = '10 0 1420 420'
const laptopView = '100 0 1100 420'
const desktopView = '50 0 1300 420'

let viewbox = mobileView

const fillColor =  '#4077a8'


const DesktopView = () => {
  const { width } = useWindowDimensions()
  const [theme] = useContext(ThemeContext)

  return (
    <div className='section'>
      <div
        // className={classNames('tile is-ancestor', {
        //   'is-vertical': width > 414 && width < 1088
        // })}
      >
        <SkylineBG 
          fillColor={theme.fillColor}
          viewbox={
            (width > 414 && width < 1088 ? mobileLandscapeView:desktopView )
          }
           />
        {/* {items.map((item, idx) => (
          <Tile className={getClassName(idx)} key={item.title} {...item} />
        ))} */}
      </div>
    </div>
  )
}

export default DesktopView
