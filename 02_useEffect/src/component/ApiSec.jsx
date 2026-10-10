import React from 'react'
import { useState , useEffect } from 'react';


const ApiSec = () => {

    let api = 'https://jsonplaceholder.typicode.com/users';

    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);


    useEffect(() =>{
      setTimeout(() =>{

        try{
          fetch(api)
        .then((res)=> res.json())
        .then((data) => setdata(data.slice(0,4)))
        // .then((data) => console.log(data))
    
        }catch{
          console.error("error occured")
        }finally{
          setloading(false);
        }


      },3000)
    },[])





  return (
    <div>

      {loading ? <h1>Loading.....</h1> : ""}

      {
      
      data.map((d) =>(
        <div key={d.id}>

            <h3>Username: {d.name}, and Email is: {d.email}</h3>


        </div>
      ))
      
      }

    </div>
  )
}

export default ApiSec