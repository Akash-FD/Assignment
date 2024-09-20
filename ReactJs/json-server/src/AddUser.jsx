import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [preRecord, setPrerecord] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:5000/students")
            .then((res) => { return res.json() })
            .then((data) =>setPrerecord(data))
        },[])
        
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === "" || email === "") {
            alert("All fild Are Mendatory")
            return;
        }
 
        if(preRecord.some(item => item.email == email)){
            alert("data has alrady exist")
            return;
        }        
        const jsonData = { name, email }

        fetch('http://localhost:5000/students', {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(jsonData)
        })
            .then((res) => {
                if (res) {
                    alert('Daata has been submited')
                    navigate('/')
                }
            })
    }
    return (
        <>
            <div className="container">                  
                <div className="row justify-content-center text-start">
                    <div className="col-lg-6">
                        <Link to="/" className='btn btn-warning'>Go Back</Link>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-3">
                                <label htmlFor="exampleInputPassword1">UserName</label>
                                <input type="name" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" id="exampleInputPassword1" placeholder="Enter UserName" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
