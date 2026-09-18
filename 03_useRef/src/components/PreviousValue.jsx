import React from 'react'
import { useState , useEffect, useRef } from 'react'

function PreviousValue() {

    const [count , setCount] = useState(0);
    const prevRef = useRef();

    useEffect(()=>{
        prevRef.current = count;
    },[count]);

  return (
    <div>

        <h1>Count: {count}</h1>
        <p>Prev count: {prevRef.current}</p>

        <button onClick={()=> {setCount(prev => prev + 1)}}>Increment</button>

    </div>
  )
}

export default PreviousValue