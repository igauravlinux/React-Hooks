import React from 'react'
import { useState } from 'react'
import '../App.css'

function Object() {

    const [student , setStudent] = useState({
        name : "Khusi khatun",
        roll : 12,
        course : "B.Tech"
    })
    

    const handleChange = () =>{
       
        // Direct update
        // setStudent({...student, name : "Khusi Sinha"})

        // functional update
         setStudent((prev) =>{
            return {...prev, name : "Khusi Sinha"}
        })
    }


  return (
    <div>

        <p>Student name is {student.name}, rollNo : {student.roll},
            and Course is : {student.course}
        </p>

        <button onClick={handleChange}>Change data</button>

    </div>
  )
}

export default Object