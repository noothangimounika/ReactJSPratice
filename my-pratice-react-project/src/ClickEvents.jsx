
import React from 'react'
import { useState } from 'react'


const ClickEvents = () => {
    const [number, setNumber]=useState(0)

    const increament=()=>{
        setNumber(number +1)
    }
    const decreament=()=>{
        // if(number>1){
        //     setNumber(number -1)
        // }
        if(number>0){
            setNumber(number -1)
        }
       
    }
    const reset=()=>{
        setNumber(0)
    }

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={increament}>Increament</button>
        <button onClick={decreament}>decreament</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ClickEvents