// import React from 'react'

import { useEffect, useState } from "react"

export const UseEffect = () => {
    const [counter , setCounter] = useState(0)
    const [otherCounter , setOtherCounter] = useState(5)
    
    function increment (){
        setCounter(counter+1);
    }
    function otherincrement(){
        setOtherCounter(otherCounter+5);
    }
    useEffect(()=>{
        document.title = `${otherCounter} new message`;
    },[otherCounter])
  return (
    <>
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}> Counter</button>
            <button onClick={otherincrement}> Counter</button>

        </div>
    </>
)
}
