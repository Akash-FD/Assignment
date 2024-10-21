import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Home() {
    const [student,setStudent]=useState(null)
  
    // const nav = useNavigate()

    useEffect(() => {
    fetch("http://localhost:5000/students")
    .then((res)=>{return res.json()})
    .then((data)=>
        setStudent(data)
    
)

})

const handelDelete = (id)=>{
    fetch(`http://localhost:5000/students/`+id,{
        method:"DELETE",
        headers:{"content-type":"application/json"}
    })
}


const handelDeleteAll =()=>{
    fetch(`http://localhost:5000/students`,{
        method:"DELETE",
        headers:{"content-type":"application/json"}
    })
    
}
 



// console.log(student);

    
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6">

                        <div>

                            <Link to="/add" className='btn btn-warning m-3'>Add New</Link>
                            <button onClick={handelDeleteAll} className='btn btn-danger'>Delete All</button>
                        </div>
                        <div>
                            <table className='table'>
                                <thead>
                                    <tr>

                                        <th scope='col'>Select</th>
                                        <th scope='col'>#</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>email</th>
                                        <th scope='col' colSpan={3}>Action</th>
                   
                                    </tr>
                                </thead>
                                <tbody>
                                    {student && student.map((item,index)=>{
                                        return <tr key={index} >
                                            <td><input type='checkbox'/></td>
                                            <th>{index+1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td><Link to={`/view/${item.id}`} className='btn btn-info'>View</Link></td>
                                            <td><Link to={`/edit/${item.id}`} className='btn btn-success'>Edit</Link></td>
                                            <td><button onClick={()=>{handelDelete(item.id)}} className='btn btn-danger'>Delete</button></td>
                                            
                                        </tr>

                                    })}

                                    

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
