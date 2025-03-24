import { useState, useEffect } from 'react'
import "./index.css"
import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (

    <Router>
      <Routes>
        <Route path="/Home" element = {<Home />}/>
        <Route path="/" element = {<Home />}/>
      </Routes>
    </Router>

  )
}

export default App
