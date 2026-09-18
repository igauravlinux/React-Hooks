import axios from 'axios';
import { useState , useEffect } from 'react';

function ApiSec() {
    let apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const [users, setUsers] = useState([]);
    const [loading , setLoading] = useState(true);

    async function fetchApi () {

        try{
            let responce = await axios.get(apiUrl)

            let data = responce.data;

            setUsers(data);

            console.log(data);
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{

        setTimeout(()=>{
            fetchApi();
        },5000)


    },[])


  return (
    <div>

        {loading ? <h1>Loading....</h1> : ""}

        {users.map((user) => {
            return <li key={user.id}>Name is: {user.name}, UserName is: {user.username}</li>
        })}

    </div>
  )
}

export default ApiSec