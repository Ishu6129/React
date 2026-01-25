import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="flex p-2 justify-between border-b-2">
      <h1 className="text-xl font-bold">Router</h1>
      <div className="flex gap-5 hover:cursor-grab">
        <Link to="/" className="hover:text-blue-500 active:text-sm">Home</Link>
        <Link to="/About" className="hover:text-blue-500 active:text-sm">About</Link>
        <Link to="/Contact" className="hover:text-blue-500 active:text-sm">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar