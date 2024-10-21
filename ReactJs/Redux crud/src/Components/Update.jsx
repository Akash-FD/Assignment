import React from 'react'

export default function Update() {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-xl-6">

     <h1 className='text-center my-3'>Update your Data</h1>
      
      <form>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Username</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your name" />
        </div>

        <div className="form-group  my-3">
          <label htmlFor="exampleInputEmail1">Enter Your Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
         
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
      </div>

    </div>
  )
}
