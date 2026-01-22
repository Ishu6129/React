import React from 'react'

const Card = (props) => {
  return (
    <a href={props.user.url} target="_blank" key={props.idx}>
    <div className="flex flex-col items-center rounded-2xl border-2 p-2 relative group">
        <img src={props.user.download_url} className="h-55 w-55 object-cover rounded-2xl hover:scale-102 transition-transform border-2
        " />
        <h2 className="mt-2 font-bold border-t-2 border-l-2 border-r-2 px-3 text-center rounded-xl"> 
        {props.user.author}
        </h2>
        <div className="bg-black h-3 w-3 rounded-full absolute top-4 border-2 border-white justify-center group-hover:scale-110 transition-transform
        "></div>
    </div>
    </a>
  )
}

export default Card