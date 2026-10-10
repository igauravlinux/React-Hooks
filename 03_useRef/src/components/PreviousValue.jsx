import React from 'react'
import { useState , useRef , useEffect} from 'react'


const PreviousValue = () => {

  const [count , setCount] = useState(0);

  const prevRef = useRef();

  useEffect(() =>{
    prevRef.current = count;
  },[count])



  return (
    <div>

      <h1>Count: {count}</h1>

      <p>Previous count: {prevRef.current} </p>

      <button onClick={() => setCount(prev => prev + 1)}>Click</button>

    </div>
  )
}

export default PreviousValue