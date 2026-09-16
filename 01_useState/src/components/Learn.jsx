import React from 'react'
import { useState } from 'react'
import '../App.css'

function Learn() {

    const [name , setName] = useState("");

  return (
    <div>

        <h1>{name}</h1>

        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />


    </div>
  )
}

export default Learn