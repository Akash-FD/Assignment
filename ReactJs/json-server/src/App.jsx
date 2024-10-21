import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import AddUser from "./AddUser"
import 'bootstrap/dist/css/bootstrap.css'
import View from "./View"
import Edit from "./Edit" 

function App() {

  // npm i bootstrap 
  // npm i react-router-dom
  // npm i -g json-server
  // manually create db.json file
  // json-server --watch db.json --port 5001
  


  return (
    <div className="text-center">
    <h1>Json curd opration</h1>
    <BrowserRouter>
    <Link to="/" className="btn btn-primary">Home</Link>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/add" element={<AddUser/>}></Route>
      <Route path="/view/:viewId" element={<View/>}></Route>
      <Route path="/edit/:editId" element={<Edit/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
