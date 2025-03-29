import { useState, useEffect } from 'react'
import "./index.css"
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { UserProfile } from './pages/UserProfile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopAll } from './pages/ShopAll'
function App() {

  const [isUserLogin, setIsUserLogin] = useState(false);

  return (

    <Router>
      <Routes>
        <Route path="/Home" element = {<Home isUserLogin = {isUserLogin}/>}/>
        <Route path="/" element = {<Home />}/>
        <Route path="/Login" element = {<Login isUserLogin = {isUserLogin} setIsUserLogin={setIsUserLogin}/>}/>
        <Route path="/SignUp" element = {<SignUp/>}/>
        <Route path="/UserProfile" element = {<UserProfile isUserLogin = {isUserLogin} setIsUserLogin={setIsUserLogin}/>} />
        <Route path = "/ShopAll" element = {<ShopAll/>}/>
      </Routes>
    </Router>

  )
}

export default App
