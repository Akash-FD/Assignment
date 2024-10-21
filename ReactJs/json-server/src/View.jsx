import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function View() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const {viewId} = useParams();
  
    useEffect(() => {
     fetch(`http://localhost:5000/students/${viewId}`)
     .then((res)=>{return res.json()})
     .then((data)=>{ 
        setName(data.name)
        setEmail(data.email)})
    })
    console.log(viewId);
    return (
      <div>
        <h2>Id : {viewId}</h2>
        <h2>name: {name}</h2>
        <h2>email : {email}</h2>
      </div>
    )
  }
    
    
    
