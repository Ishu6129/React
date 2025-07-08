import React, { useState } from 'react'
import "./Form.css"

const FormOptimized = () => {
    
    const[FormData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })

    const handleFormChange=(e)=>{
        setFormData(
            (prev)=>({...prev,
                [e.target.name]: e.target.value
            }));
        }

    const handleSubmit=(e)=>{
    e.preventDefault();
        if(FormData.name && FormData.email && FormData.password){
            alert(`Name: ${FormData.name}, Email: ${FormData.email}, Password: ${FormData.password}`);
            console.log(FormData);
            setFormData({
                name:"",
                email:"",
                password:""
            });
        } else {
            alert("Please fill all fields");
        }
    }

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <input onChange={handleFormChange} name="name" value={FormData.name} type="text" placeholder="Enter your name" />
            <input onChange={handleFormChange} name="email" value={FormData.email} type="email" placeholder="Enter your email" />
            <input onChange={handleFormChange}  name="password" value={FormData.password} type="password" placeholder="Enter your password" />
            <button type="submit">Submit</button>
        </form>
    </section>
  )

}

export default FormOptimized