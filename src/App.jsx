import { useState } from 'react'

import './App.css'
import Header from './component/Header'
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";



function App() {
  

  return (
  <div >
    <Header></Header>
    
     <Navbar />
      <HeroSection />
  </div>
  )
}

export default App
