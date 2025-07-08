import React, { useState } from 'react'
import "./Form.css"

const Form = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    
    const handleNameChange=(e)=>{
        setName(e.target.value);
    }

    const handleSubmit=(e)=>{
    e.preventDefault();
        if(name && email && password){
            alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
            setName("");
            setEmail("");
            setPassword("");
        } else {
            alert("Please fill all fields");
        }
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <input onChange={handleNameChange} value={name} type="text" placeholder="Enter your name" />
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder="Enter your email" />
            <input onChange={(e)=>{setPassword(e.target.value)}}  value={password} type="password" placeholder="Enter your password" />
            <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default Form