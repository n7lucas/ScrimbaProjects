import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from "./data/data.js"
import Hero from './components/Hero'
import Navbar from './components/Navbar'
function App() {
  
  const htmlRender = data.map(item => {
    return ( <Hero{...item}/>)
})
    

  return (
    <div>
      <Navbar/>
      {htmlRender}
    </div>
  )
}

export default App
