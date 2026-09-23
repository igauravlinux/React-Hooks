import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

const Learn = () => {

const initialState = {count : 0};

const reducer = (state , action) =>{
    switch(action.type){
        case 'plus' :{
            return {count: state.count + 1}
        }
        case 'minus' :{
            return {count : state.count - 1}
        }
        default : {
            return state
        }
    }
}

    const [state , dispatch] = useReducer(reducer , initialState);


  return (
    <div>

        <h1> {state.count} </h1>
        <button onClick={()=>dispatch({type : 'plus'})} style={{margin : "10px"}}>Increment</button>
        <button onClick={()=>dispatch({type : 'minus'})}>Decrement</button>
    </div>
  )
}

export default Learn