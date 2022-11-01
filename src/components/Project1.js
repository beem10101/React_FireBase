import React, { useState } from 'react'
import '../App.css';
import { db } from "../Firebase";

const Project1 = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState(0);
  const [classroom, setClassroom] = useState("");
  const [message, setMessage] = useState("");


  const [formLoad, setFormLoad] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      setFormLoad(true);
      db.collection('information').add({
          name: name,
          surname: surname,
          number: number,
          classroom: classroom,
          message: message,

      })
      .then(() => {
          alert('Message added successfully');
          setFormLoad(false)
      })
      .catch((error) => {
          alert(error.message);
          setFormLoad(false)
      });


      setName("")
      setSurname("")
      setNumber(0)
      setClassroom("")
      setMessage("")

  }


return (
  <form className="form" onSubmit={handleSubmit}>
      <h1>Information</h1>

      <label>Name</label>
      <input placeholder='Name' value={name}
      onChange={(e) => setName(e.target.value)}
      ></input>

      <label>Surname</label>
      <input placeholder='Surname' value={surname}
      onChange={(e) => setSurname(e.target.value)}></input>
      
      <label>Number</label>
      <input placeholder='Number' value={number}
      onChange={(e) => setNumber(e.target.value)}></input>
      
      <label>Class</label>
      <input placeholder='Class' value={classroom}
      onChange={(e) => setClassroom(e.target.value)}></input>
     
      <label>Message</label>
      <textarea placeholder='Message' value={message}
      onChange={(e) => setMessage(e.target.value)}></textarea>
      <br/>
      <br/>
      <br/>
      <button type="submit" style={{background: formLoad ? "#ccc" : "rgb(210, 210, 210)"}}>Submit</button>

  </form>

)
}

export default Project1