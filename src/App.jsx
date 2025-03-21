import { useState, useEffect } from 'react'
import "./index.css"
import './App.css'
import {Navbar} from './assets/components/sections/Navbar'
import { Categories } from './assets/components/sections/Categories'
import {MobileMenu} from './assets/components/sections/MobileMenu'
function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobileMenuClick, setIsMobileMenuClick] = useState(false);

  // check if the window change the size to set value of setIsSmallScreen
  useEffect(() => {
      const windResize = () => {
          const windSize = window.innerWidth;
          // the small size could be 768
          setIsSmallScreen(windSize <= 900); 
      }
      windResize();
      window.addEventListener('resize', windResize);
      return () => {
          window.removeEventListener('resize', windResize);
      }

  }, [])

  useEffect(() => {

    console.log("isMobileMenuClick in app: ", isMobileMenuClick)

  },[isMobileMenuClick])






  return (
    <>
      <Navbar isSmallScreen = {isSmallScreen}  isMobileMenuClick ={isMobileMenuClick} setIsMobileMenuClick= {setIsMobileMenuClick}/>

      {/* close or open mobilemenu component when the isMobileMenuClick is false or true */}
      {/* {isMobileMenuClick && (<MobileMenu isMobileMenuClick = {isMobileMenuClick} setIsMobileMenuClick= {setIsMobileMenuClick}/>)}  */}
      <MobileMenu isMobileMenuClick = {isMobileMenuClick} setIsMobileMenuClick= {setIsMobileMenuClick}/>
      
      <Categories isSmallScreen = {isSmallScreen}/>
      
    </>
  )
}

export default App
