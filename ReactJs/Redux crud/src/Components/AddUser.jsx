import React, { useState } from 'react'
import { addUser } from './UserReducer'

export default function AddUser() {

  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <h1 className='text-center my-4'>Add New User</h1>
          <form>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Username</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your name" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>

            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Enter Your Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={course} onChange={(e) => { setCourse(e.target.value) }} />

            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
      </div>

    </div>
  )
}
