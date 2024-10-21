import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import AddUser from './Components/AddUser'
import Update from './Components/Update'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
 

  return (
    <>
    <div className="app">
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/addUser' element={<AddUser/>}></Route>
       <Route path='/edit/:id' element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
   
    </>
  )
}

export default App
