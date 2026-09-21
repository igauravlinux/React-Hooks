import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {UserContext} from '../context/UserContext'


const Footer = () => {


    const {phone, name} = useContext(AppContext);
    const user = useContext(UserContext);

  return (
    <div>
        <h1>Footer</h1>
        <p>Phone: {phone} </p>
        <p>Name: {name} </p>
        <p>Id: {user.id}</p>
        <p>FullName: {user.FullName}</p>
    </div>
  )
}

export default Footer