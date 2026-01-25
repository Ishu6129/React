import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,increaseByAmount } from './redux/features/counterSlice.js'
const App = () => {
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.value);
  return (
    <div>
      <h1>Redux App</h1>
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>
        <span>{count}</span>
      <button onClick={()=>{
        dispatch(increment())
      }}>Increment</button>
      <br />
      <button onClick={()=>{
        dispatch(increaseByAmount(5))
      }}>Increase by 5</button>
    </div>
  )
}

export default App