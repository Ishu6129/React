import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div className="relative">
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App