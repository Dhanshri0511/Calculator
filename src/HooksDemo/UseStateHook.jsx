// import React from 'react'

import { useState } from "react"

export const UseStateHook = () => {
    const [counter , setCounter] = useState(0)

    
    function increment (){
        setCounter(counter+1);
    }
  return (
    <>
        <div>
            <input type="text" onChange={(e) => e.target.value}></input>
            <h1>{counter}</h1>
            <button onClick={increment}> Counter</button>
        </div>
    </>
)
}
