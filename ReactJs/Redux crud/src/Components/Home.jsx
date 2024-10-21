import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { deleteUser } from '../Components/UserReducer'

export default function Home() {

  const users = useSelector((state)=>state.user)
  const dispatch = useDispatch();

  const handleDelete = ()=>{
    dispatch(deleteUser)
  }



  

  return (
    <div>
      <div className="container text-center">
      <h1>Redux Crud Opration</h1>
        <div className="row justify-content-center my-4">
          <div className="col-xl-6">
            <Link to="/addUser" className='btn btn-success my-3'>Add New</Link>
            <table className='table'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                
                {users.map((item,index)=>(
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.course}</td>
                    <td>
                      <Link to={`/edit/${item.id}`} className='btn btn-primary mx-3'>Edit</Link>
                      <Link onClick={()=>handleDelete(item.id)} className='btn btn-danger'>Delete</Link>
                    </td>
                  </tr>
                ))}
                
              </tbody>
            </table>
          </div>

        </div>
      </div>
      
    </div>
  )
}
