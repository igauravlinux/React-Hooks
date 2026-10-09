import React from 'react'
import { useState , useEffect } from 'react'


function ApiFetch() {

    const [users , setUsers] = useState([]);

    let api = 'https://jsonplaceholder.typicode.com/users';

   useEffect(() =>{
        fetch(api)
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err)) 
   },[])


  return (
    <div>

        {
            users && users.length > 0 ?

            users.map((user) => (
                <li key={user.id}>{user.username}</li>
            ))

            :

            <h1>Loading...</h1>
        }

    </div>
  )
}

export default ApiFetch