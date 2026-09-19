import React from 'react'
import Learn from './components/learn'
import Cube from './components/Cube'
import FilteredList from './components/FilteredList'

function App() {
  return (
    <div>
      {/* <Learn num={5} /> */}
      {/* <Cube /> */}
      <FilteredList items={["Apple","Banana","Mango","Litchi","Acer"]} />
    </div>
  )
}

export default App