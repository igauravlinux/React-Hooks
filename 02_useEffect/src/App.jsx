import React from 'react'
import './App.css'
import Learn from './component/Learn'
import ApiFetch from './component/ApiFetch'
import ApiSec from './component/ApiSec'

function App() {
  return (
    <div className='parent'>
        {/* <Learn/> */}
        {/* <ApiFetch /> */}
        <ApiSec />
    </div>
  )
}

export default App