import React from 'react'
import { useState , useEffect } from 'react'
import useLocalStorage from './hooks/useLocalStorage'

const App = () => {

  const [name , setName] = useLocalStorage('username', '')

  return (
    <div>

      <input type="text" placeholder='Enter your name' value={name}
      onChange={(e) => setName(e.target.value)} />

      <h1>hey {name}</h1>

    </div>
  )
}

export default App