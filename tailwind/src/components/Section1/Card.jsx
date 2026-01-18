import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="bg-black border-2 rounded-lg border-gray-300 p-3 w-80 h-full flex shrink-0 flex-col items-center justify-between font-serif gap-2">
        <div className="top w-full flex justify-between items-start text-gray-400">
          <h4 className="text-left text-sm">{props.upTme}</h4>
          <h4 className="text-right text-sm">{props.year}</h4>
        </div>
        <h2 className="text-amber-300 name text-center font-bold text-4xl">{props.name}</h2>
        <div className="image h-60 w-60 flex justify-center items-center"> 
          <img src={props.img} alt="Placeholder Image" style={{animation: 'spin 21s linear infinite'}} />
        </div>
        <div className="text-white content text-center text-sm line-clamp-3">
            <p>{props.desc}</p>
        </div>
    </div>
    </>
  )
}

export default Card