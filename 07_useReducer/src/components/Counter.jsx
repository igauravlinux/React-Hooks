import { useReducer, useState } from "react";

const initialState = {
    count : 0
}

const reducer = (state , action) =>{
    switch(action.type){
        case "Increment" :
            return{
                count : state.count + 1
            };
        
        case "Decrement" :
            return{
                count : state.count - 1
            };

        case "Reset" :
            return{
                count : 0
            };

        default :
            return state;
    }
}

const Counter = () => {

    const [state , dispatch] = useReducer(reducer , initialState);

  return (
    <div>

    <h1>Count : {state.count}</h1>

    <button onClick={()=> dispatch({type: "Increment"})}>Increment</button>

    <button onClick={()=> dispatch({type: "Decrement"})}>Decrement</button>

    <button onClick={() => dispatch({type : "Reset"})}>Reset</button>


    </div>
  )
}

export default Counter