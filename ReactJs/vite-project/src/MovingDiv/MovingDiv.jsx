import React, { useState } from 'react'

export default function MovingDiv() {

    const[div,setDiv] = useState({x:0,y:0})     

    const position = (e)=>{
        console.log(e);
        setDiv({
            x:e.clientX,
            y:e.clientY
          
        })

    }

    document.addEventListener("mousemove",position)


  return (
    <div style={{height:"40px",width:"40px",background:"red",transform:`translate(${div.x}px,${div.y}px)` ,position : 'absolute' , top :-20, left :-20}}>
      
      
    </div>
  )
}
