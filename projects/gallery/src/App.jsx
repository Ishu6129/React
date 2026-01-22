import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Card from './components/Card.jsx'
const App = () => {
    const [userdata, setuserdata] = useState([])
    const [index, setindex] = useState(1)

    const getData=async ()=>{
        const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
        setuserdata(response.data);
    }
    useEffect(()=>{
        getData();  
        console.log("asd")
    },[index])

    let printUserData=<h1 className="w-full h-full flex items-center justify-center text-3xl font-bold animate-pulse text-gray-500">
        Loading...</h1>;
    if(userdata.length>0){
        printUserData=userdata.map((user,idx)=>{
            return(
                <Card user={user}/>
            )
        })
    }
  return (
    <div className="bg-black h-screen text-white my-0 py-10">

        <div id="content"  className="flex flex-wrap gap-4 justify-center h-[95%] overflow-y-auto">
            {printUserData}
        </div>
        
        <div className="flex justify-center mt-3">
            <button style={{opacity:index==1?0.5:1}} className="bg-yellow-300 text-black font-bold px-4 py-2 m-2 rounded-lg hover:bg-yellow-200 active:scale-95 active:cursor-grabbing" onClick={()=>{
                if(index>1){
                    setuserdata([]);
                    setindex(index-1);
                }
            }}>
                Previous
            </button>
            <h4 className="text-xl font-bold m-2 mt-3">Page {index}</h4>
            <button className="bg-yellow-300 text-black font-bold px-4 py-2 m-2 rounded-lg hover:bg-yellow-200 active:scale-95 active:cursor-grabbing" onClick={()=>{
                setuserdata([]);
                setindex(index+1);
            }}>
                Next
            </button>
        </div>
    </div>
  )
}

export default App