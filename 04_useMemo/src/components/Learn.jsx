import React from 'react'
import { useMemo } from 'react';

function Learn({num}) {

    const squareValue = useMemo(()=>{
        console.log("calculating....");
        return num * num;
    },[num]);


  return (
    <div>
        <h2>Sqared value: {squareValue}</h2>
    </div>
  )
}

export default Learn