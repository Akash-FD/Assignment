
import React, {useState}from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)


    const handelIncrement = () => {
        setCount(count + 1)
    }
    const handelDecrement = () => {
        setCount(count - 1)
    }
    return (
        <div style={{ margin: "0 auto", border: "1px solid black", textAlign: "center", backgroundColor: "black" }}>
            <h1 style={{ color: "aliceblue" }}>Counter App</h1>
            <h1 style={{ color: "aliceblue" }}>{count}</h1>
            <button style={{ backgroundColor: "green", padding: "15px", color: "aliceblue" }} onClick={handelIncrement}>Increment</button>
            <button style={{ backgroundColor: "red", padding: "15px", color: "aliceblue" }} onClick={handelDecrement}>Decrement</button>
        </div>
    )
}



