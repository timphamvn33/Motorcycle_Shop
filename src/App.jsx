import { useState } from 'react'
import "./index.css"
import './App.css'
import {Navbar} from './assets/components/sections/Navbar'
import { Categories } from './assets/components/sections/Categories'
function App() {
  return (
    <>
      <Navbar />
      <Categories/>
      
    </>
  )
}

export default App
