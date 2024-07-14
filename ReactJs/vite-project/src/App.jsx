import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import HelloReact from './Hello/HelloReact'
import Counter from './Counter/Counter'
import LoginPage from './Login.jsx/LoginPage'
import TodoList from './TodoList/TodoList'

function App() {
  

  return (
    <>
    <HelloReact/>
   <Counter/><br/><br/>
    <LoginPage/><br /><br />
    <TodoList/>
    
    </>
  )
}

export default App
