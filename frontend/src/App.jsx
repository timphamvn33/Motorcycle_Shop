import { useState, useEffect } from 'react'
import "./index.css"
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (

    <Router>
      <Routes>
        <Route path="/Home" element = {<Home />}/>
        <Route path="/" element = {<Home />}/>
        <Route path="/Login" element = {<Login />}/>
        <Route path="/SignUp" element = {<SignUp />}/>
      </Routes>
    </Router>

  )
}

export default App
