import React from "react";
import { useState } from "react";
import { X } from 'lucide-react';
const App = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("")
  const [task,settask]=useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    
    console.log(title,desc);

    const copyTask=[...task];
    copyTask.push({title,desc});
    settask(copyTask);
    console.log(task);

    settitle("");
    setdesc("");
  };
  const deleteHandler = (index) => {
    const copyTask=[...task];
    copyTask.splice(index,1);
    settask(copyTask);
  }

  return (
    <div className="min-h-screen lg:flex bg-black text-white">
      <form onSubmit={submitHandler} className="flex flex-col gap-5 px-10 py-8 lg:w-1/2 border-2 border-amber-50 rounded-xl m-2">
        <h1 className="text-5xl font-bold mb-4">Add Notes</h1>
        <input className="border-2 border-gray-400 rounded-xl w-full p-3 focus:outline-none" value={title} onChange={(e)=>settitle(e.target.value)} type="text" placeholder="Title" required/>

        <textarea className="border-2 border-gray-400 rounded-xl min-h-50 w-full p-3 focus:outline-none resize-none" placeholder="Description" value={desc} onChange={(e)=>setdesc(e.target.value)} required />

        <button className="bg-amber-200 hover:bg-amber-300 transition text-black text-2xl p-3 rounded-xl w-full active:scale-95">
          Add Note
        </button>
      </form>

      <div className="lg:w-1/2 px-10 py-8 border-2 border-amber-50 rounded-xl my-2">
      {(task.length===0)?
        (<h2 className="text-3xl font-semibold text-gray-500">No Notes Added Yet</h2>):
        (<>
        <h1 className="text-5xl font-bold mb-5">Your Notes</h1>
        <div id="scroll"  className="flex flex-wrap gap-6 overflow-auto max-h-[77vh]"  >
          {task.map((item,index)=>(
            <div key={index} className="relative border-amber-50 border-2 rounded-xl h-40 w-40 p-3" >
              <button className="absolute top-px right-px text-red-500 bg-amber-300 rounded-2xl  hover:bg-red-500 hover:text-amber-50" onClick={()=>deleteHandler(index)} >
                <X size={15} >
                </X></button>
              <h2 className="text-black  bg-amber-200 rounded-xl border-b-2 font-bold text-center uppercase wrap-break-words">{item.title}</h2>
              <p id="scroll" className="text-amber-50 text-sm mt-2 leading-tight overflow-auto max-h-27 wrap-break-wordbreak-words">
                {item.desc}</p>
            </div>
          ))} 
        </div>
        </>)
      }
      </div>
    </div>
  );
};

export default App;
