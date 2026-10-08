import React from 'react'
import { useEffect , useLayoutEffect } from 'react'

// useLayoutEffect => is a React Hook that runs synchronously after the DOM has been updated but before the browser paints the UI on the screen.

const App = () => {

  useEffect(()=>{
    console.log("useEffect is ran"); // ui render hone ke baad 
  },[])

  useLayoutEffect(()=>{
    console.log("useLayoutEffect is ran"); // ui render hone ke paihle
  },[])


  return (
    <div>

      <h2>Test Message</h2>

      {Array(1000).fill('').map((item, index) =>(
        <li key={index}> {Math.pow(Math.random(),5)} </li>
      ))}

    </div>
  )
}

export default App