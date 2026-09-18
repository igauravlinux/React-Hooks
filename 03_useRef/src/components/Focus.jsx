import React from 'react'
import { useRef } from 'react'

function Focus() {

    const focusRef = useRef(null);

    const handleInput = () =>{  
        focusRef.current.focus();
        focusRef.current.style.color = 'red';
        focusRef.current.style.padding = '20px';
        focusRef.current.style.border = '2px solid red';
    }

  return (
    <div>

    <input ref={focusRef} type="text" />

    <br />

    <button onClick={handleInput}>Focus</button>


    </div>
  )
}

export default Focus