import { useState, useEffect } from 'react'
import "./index.css"
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { UserProfile } from './pages/UserProfile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopAll } from './pages/ShopAll';
import { ItemDetail } from './pages/ItemDetail'
import {Cart} from './pages/Cart'
function App() {

  const [isUserLogin, setIsUserLogin] = useState(false);
  const [quantityItemAdded, setQuantityItemAdded] = useState("0");
  const [itemsAdded, setItemsAdded] = useState();

  return (

    <Router>
      <Routes>
        <Route path="/Home" element = {<Home isUserLogin = {isUserLogin}/>}/>
        <Route path="/" element = {<Home />}/>
        <Route path="/Login" element = {<Login isUserLogin = {isUserLogin} setIsUserLogin={setIsUserLogin}/>}/>
        <Route path="/SignUp" element = {<SignUp/>}/>
        <Route path="/UserProfile" element = {<UserProfile isUserLogin = {isUserLogin} setIsUserLogin={setIsUserLogin}/>} />
        <Route path = "/ShopAll" element = {<ShopAll/>}/>
        <Route path = "/ItemDetail/:id" element = {<ItemDetail quantityItemAdded ={quantityItemAdded} setQuantityItemAdded = {setQuantityItemAdded}mitemsAdded = {itemsAdded} setItemsAdded = {setItemsAdded}/>}/>
        <Route path = "/Cart" element = {<Cart itemsAdded = {itemsAdded} setItemsAdded = {setItemsAdded}/>}/>
      </Routes>
    </Router>

  )
}

export default App
