import React from 'react'
import Content from './components/Content'
import WindowDimensionsProvider from './components/WindowDimensionsProvider'


const ColorScheme = React.createContext()
const colors= {
  skyGradient: 'linear-gradient(180deg,rgba(130, 173, 219, 1) 0%,rgba(115, 174, 201, 1) 40%,rgba(235, 200, 177, 1) 100%)',
  fillColor: '#4077a8'
}




const App = () => (
  <ColorScheme.Provider value={colors}>
  <WindowDimensionsProvider>
    <Content />
  </WindowDimensionsProvider>
  </ColorScheme.Provider>
)

export default App
