import React,{useContext} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { themecontext } from "./context/Themecontext.jsx";
const App = () => {
  const [mode] = useContext(themecontext);
  const isDark = mode === "dark";
  return (
    <div className={isDark ? "bg-black relative pb-10 text-white" : "bg-white relative pb-10 text-black"}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App