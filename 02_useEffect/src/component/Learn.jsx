import React from 'react'
import { useEffect , useState } from 'react'

function Learn() {

    const [count , setCount] = useState(0);

    useEffect(()=>{
        console.log("useEffect runs");
    },[count])



  return (
    <div>

        <p>Count : {count}</p>
        <button onClick={()=> setCount(prev => prev + 1)}>Increment</button>


    </div>
  )
}

export default Learn