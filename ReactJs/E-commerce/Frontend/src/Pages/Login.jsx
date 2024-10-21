import React, { useState } from 'react'
import './Login.css'
export default function Login() {
  const [isLogine,setIsLogin] = useState("Sign up")

  return (
    <div className="main-login">

      <div className='loginesignup'>
        <h1>{isLogine}<hr style={{width:"80%", margin:"0 auto",height:"3px",marginTop:"8px"}}/></h1>

         {isLogine==="Sign up"?<div className="login-input">
          <input type="text" placeholder='Your Name' />
          <input type='email' placeholder='Your Email Address' />
          <input type='password' placeholder='Your Password' />
          <button type='submit'>Continue</button>
        </div>
         :<div className="login-input">
         
          <input type='email' placeholder='Your Email Address' />
          <input type='password' placeholder='Your Password' />
           <a href="#">forgot password</a>
          <button type='submit'>Continue</button>
          </div>}
      
        <p>Already have an account?
          <button style={{color:"red",fontWeight:"600",fontSize:"17px",border:"none",background:"none"}}
           onClick={()=>{setIsLogin(isLogine==="Sign up"?"Login":"Sign up")}}>{isLogine==="Sign up"?"Login here":"Sign up"}</button>
         </p>

        <div className="checkbox">
          <input type="checkbox" />
           <span>By continuing, i agree to the terms of use & privacy policy.</span>
        </div>
      </div>
    </div>
  )
}
