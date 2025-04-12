import { useState } from "react"

export default function Counter(){

    const [count, setCounter] = useState(0)
    
    function updateCount(){
        const newCount = count + 1
        setCounter(newCount)
    }
    function reduceCount(){
        const newCount = count-1
        setCounter(newCount)
    }


    return (
        <div style={{border: "1px solid green", padding: "5px"}}>
            <h3>Counter : {count}</h3>
            <button onClick={updateCount}>Add</button>
            <button onClick={reduceCount}>Reduce</button>
        </div>
    )
}