import React, { useState , useCallback } from 'react'
import Headers from './Header'

function Learn() {

  const [count , setCount] = useState(0);

  const heyBabeProps = useCallback(() =>{
    
  },[count]);

  return (
    <div>
        <Headers heyBabeProps={heyBabeProps} />
        <h1>{count}</h1>
        <button onClick={()=> {setCount(prev => prev + 1)}}>Increment</button>      
    </div>
  )
}

export default Learn;