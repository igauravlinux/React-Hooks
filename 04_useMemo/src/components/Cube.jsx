import React from 'react'
import { useState , useMemo } from 'react'

function Cube() {
    const [number , setNumber] = useState(0);
    const [counter , setCounter] = useState(0);

    function cubeNum(num){
        console.log('Calculation Done..');
        return Math.pow(num , 3);
    }

    const result = useMemo(()=> cubeNum(number),[number])



  return (
    <div>
        <input type="number" value={number} onChange={(e)=> {setNumber(e.target.value)}} />
        <h1>Cube of the number: {result}</h1>

        <h1>Counter: {counter}</h1>
        <button onClick={() => {setCounter(prev => prev + 1)}}>Increment</button>
         
    </div>
  )
}

export default Cube