import './Counter.css'
import React, {useState} from 'react'

function Counter() {
const [counter, setCounter] = useState(0)

const increases = () =>{
    setCounter(counter + 1);
}
const decrease = () =>{
    setCounter(counter - 1)
}
const reset= () =>{
    setCounter(0)
}
    return (
        <div className="counter_container">
            <div className="all_container">
                <div className="goback_ontainer">
                    Click here to go  back
                </div>

                <div className="coantainer_inup" >
                  Output:{counter}
                </div>
                <div className="all_button">
               
                <button onClick={increases}>+</button>
                
                
                <button onClick={decrease}>-</button>
               
                </div>
                <div className="container_Reset">
                <button onClick={reset}>Reset</button>
                </div>


            </div>
            
        </div>
    )
}

export default Counter
