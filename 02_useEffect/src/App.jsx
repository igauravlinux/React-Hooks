import React from 'react'
import './App.css'
import Learn from './component/Learn'
import ApiFetch from './component/ApiFetch'
import ApiSec from './component/ApiSec'
import Counter from './component/Counter'

function App() {
  return (
    <div className='parent'>
        {/* <Learn/> */}
        {/* <ApiFetch /> */}
        {/* <ApiSec /> */}
        <Counter/>
    </div>
  )
}

export default App