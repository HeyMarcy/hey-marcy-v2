import React from 'react'
import ResponsiveLayout from '../ResponsiveLayout'
import MobileView from './MobileView'
import DesktopView from './DesktopView'
import styled from "@emotion/styled"


const Content = () => {

  return (
    <ResponsiveLayout
      breakPoint={767}
      renderDesktop={() => (
        <DesktopView  />
      )}
      renderMobile={() => (
        <MobileView />
      )}
    />
  )
}

export default Content
