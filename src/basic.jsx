import './App.css'
import { useState } from 'react'
import Profile from './components/profile'


function App() {
  const[count,setCount]=useState(0);
  function increment() {
    // setCount(count + 1);
    // for using prevState👇
    setCount((prevState) => prevState + 1);
    console.log(count);
  };
  return (
    <>
    <h1>Hello World</h1>
    <div onClick={increment} style={{color:'red',border:'1px solid black'}}>clickme </div>
    <div>Count :{count}</div>
    <div ><Profile name="John Doe" email={"adbfj@gmail.com"} />
    <Profile name="Jane Smith" email={"ishu@gmail.com"} />
    <Profile name="Alice Johnson" email={"alice@gmail.com"} />
    </div>
    
    </>
    
  )
}

export default App
