import React, { use, useEffect, useState } from 'react'

const EffectExample = () => {
  console.log("Added to DOM");
  // useEffect is used to perform side effects in functional components
  const[count,setCount]=useState(0);
  useEffect(() => {
    console.log("Effect called");
    return () => {
      console.log("Cleanup function called");
    }
  },[count]);
  return (
    <div>
      <article>Count : {count}</article>
      <button onClick={() => setCount((prev)=>prev + 1)}>Increment</button>
      
    </div>
  )
}

export default EffectExample