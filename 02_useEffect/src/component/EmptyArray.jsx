import React from 'react'
import { useEffect , useState } from 'react'

const EmptyArray = () => {

    const [count , setCount] = useState(0);

    useEffect(() =>{
        console.log('useEffect runs')
    },[count])

  return (
    <div>
        <h1>Count : {count}</h1>

        <button onClick={() => setCount(prev => prev + 1)}>Click</button>

    </div>
  )
}

export default EmptyArray