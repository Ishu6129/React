import React from 'react'
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full flex px-2 bg-black text-white justify-between border-t-2 pb-4 pt-4">
      <h1 className="text-xl font-mediun">This is just an Footer</h1>
      <div className="flex gap-5">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Footer