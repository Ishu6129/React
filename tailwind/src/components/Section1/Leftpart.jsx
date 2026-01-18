import React from 'react'
import { HandCoins } from 'lucide-react';
const Leftpart = () => {
  return (
    <div className="p-4 w-2/6  justify-between flex flex-col items-center border-2 rounded-lg border-gray-300 m-2">
        <div className="text-amber-300 text-4xl pt-30 leading-[1.7] font-bold text-center font-serif">
            A <br/>Journey<br/> 
            <span className="text-5xl text-gray-300">Through</span> 
            <br/>Value & Time
        </div>
        <div className="text-amber-100 text-6xl animate-bounce text-center w-24 h-24">
            <HandCoins className="w-full h-full" />
        </div>
    </div>
  )
}

export default Leftpart