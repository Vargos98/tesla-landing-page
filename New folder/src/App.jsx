// import React from 'react'

import CyberTruck from "./Components/CyberTruck"
import Header from "./components/Header"
import ModelS from "./Components/ModelS"
import ModelThree from "./Components/ModelThree"
import ModelX from "./Components/ModelX"

const App = () => {
  return (
    <div >
       <Header/>
       <ModelThree/>
       <ModelX/>
       <ModelS/>
       <CyberTruck/>
    </div>
  )
}

export default App