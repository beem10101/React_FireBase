import React, { useState } from 'react'
import '../App.css';


const Project1 = () => {
    const [name,setName] = useState("hello");
    return (
    <form className="form">
        <h1>information</h1> 


        <label>Name</label>
        <input placeholder='fullName' 
        value={name}
        onChange={(e)=>setName(e.target.value)}>
        </input>
                        
        <label>{name}</label>
        <input placeholder='nickname'></input>

        <label>Tel.</label>
        <input placeholder='tel.'></input>

        <button>submit</button>
    </form>
  )
}

export default Project1