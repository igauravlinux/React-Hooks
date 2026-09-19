import React from 'react'
import { useState , useMemo } from 'react'

function FilteredList({items}) {

    const [query , setQuery] = useState("");

    const fileredItems = useMemo(()=>{
        console.log("Filtering....");

        return items.filter(item =>
                item.toLowerCase().includes(
                    query.toLowerCase()
                )
        );
    },[items , query]);


  return (
    <div>

        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder='search...' />

        <ul>
            {fileredItems.map((item, i) =>{
               return <li key={i}> {item} </li>
            })}
        </ul>

    </div>
  )
}

export default FilteredList