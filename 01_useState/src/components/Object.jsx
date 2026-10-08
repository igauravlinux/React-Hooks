import React from 'react'
import { useState } from 'react'
import '../App.css'

function Object() {

    const [name , setName] = useState({
        fullName : "Khusi",
        lastName : "Kumair",
        age : 19
    });

    function updateValue (){
        // Direct update 
        // setName({...name, lastName : "Kumari" , age : 20})

        // functional update
        setName((prev) =>{
            return {...prev, lastName : "Kumari" , age : 22}
        }) 
    }

  return (
    <div>

        <h1>{name.fullName} {name.lastName} {name.age}</h1>

        <button onClick={updateValue}>Update</button>

    </div>
  )
}

export default Object