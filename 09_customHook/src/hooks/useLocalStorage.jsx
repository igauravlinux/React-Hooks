import { useState , useEffect } from "react";

import React from 'react'

const useLocalStorage = (key , initialValue) => {

   const [name , setName] = useState(
    localStorage.getItem(key) ? 
    localStorage.getItem(key) : initialValue
  );


  useEffect(() =>{
    localStorage.setItem(key, name)
  },[name, setName])

  return [name , setName]
}

export default useLocalStorage