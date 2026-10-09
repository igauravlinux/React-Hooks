import React from 'react'
import './App.css'

import ApiFetch from './component/ApiFetch'
import ApiSec from './component/ApiSec'
import Counter from './component/Counter'
import EmptyArray from './component/EmptyArray'

function App() {
  return (
    <div className='parent'>
        {/* <ApiFetch /> */}
        <ApiSec />
        {/* <Counter/> */}
        {/* <EmptyArray /> */}
    </div>
  )
}

export default App