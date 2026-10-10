import React from 'react'
import { useRef } from 'react'

const Focus = () => {

  const inputRef = useRef(null);

    const handleFocus = () =>{
      inputRef.current.focus();
    }
  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default Focus