import React from 'react'
import Card from './Card.jsx'
const Rightpart = (props) => {
  return (
    <div id="right" className="p-2 shrink-0 w-4/6 justify-between flex flex-row items-center border-2 rounded-lg overflow-x-auto gap-5 m-0">
        {props.data && props.data.map((coin, index) => (
          <Card key={index} name={coin.name} img={coin.img} year={coin.year} upTme={coin.upTme} desc={coin.desc} />
        ))}
    </div>
  )
}

export default Rightpart