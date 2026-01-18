import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="card">
        <div className="top">
          <div className="dateTime">
            <h4>{props.upTme}</h4>
            <h4>{props.year}</h4>
          </div>
          <h2 className="name">{props.name}</h2>
        </div>
        <div> 
          <img src={props.img} alt="Placeholder Image" />
        </div>
        <div className="content">
            <p>{props.desc}</p>
        </div>
    </div>
    </>
  )
}

export default Card;