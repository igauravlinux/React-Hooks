import React from 'react'
import { useState , useEffect } from 'react'


function ApiFetch() {

    const [users , setUsers] = useState([]);

    let api = 'https://jsonplaceholder.typicode.com/users';

    async function fetchApi () {

        
        try{
            const response = await fetch(api);

            const data = await response.json();

            setUsers(data);
            console.log(data);
            


        }catch(error){
            console.log(error);
        }

    }


    useEffect(()=>{
        fetchApi();
    },[]);


  return (
    <div>

        {users.map((user)=>{
           return <li key={user.id}> {user.name} </li>
        })}

    </div>
  )
}

export default ApiFetch