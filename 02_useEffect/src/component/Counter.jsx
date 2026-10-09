import React from 'react'
import { useState , useEffect } from 'react'

function Counter() {

    const [count , setCount] = useState(0);

    useEffect(() =>{
        setTimeout(() =>{
            setCount(prev => prev + 1)
            console.log("hey")
        },1000)
    },[])


  return (
    <div>
        <h1>Count : {count}</h1>
    </div>
  )
}

export default Counter