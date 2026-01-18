import React from 'react'
import Leftpart from './Leftpart.jsx'
import Rightpart from './Rightpart.jsx'
const Section1 = (props) => {
    console.log(props.cardData);
  return (
    <div className="flex justify-between m-2 gap-1 h-[calc(100vh-86px)]">
        <Leftpart />
        <Rightpart data={props.data} />
    </div>
  ) 
}

export default Section1