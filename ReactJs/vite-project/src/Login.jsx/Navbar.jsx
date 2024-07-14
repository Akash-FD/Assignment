import React from 'react'

export default function Navbar() {
  return (
    <div style={{backgroundColor:"blue",width:"95%",margin:"0 auto",borderRadius:"30px"}}>
      <div style={{ width:"90%",margin:"0 auto", backgroundColor:"blue",color:"aliceblue",textAlign:"center",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h1>Logo</h1>
        <div style={{display:"flex",listStyleType:"none",fontSize:'25px',gap:"50px"}}>

        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
        </div>
        
        <button style={{width:"100px",height:"50px", backgroundColor:"red",color:"aliceblue",fontSize:"25px",borderRadius:"30px"}}>Logout</button>
      </div>
    </div>
  )
}
