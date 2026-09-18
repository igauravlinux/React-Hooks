import { useState , useRef } from 'react'

function Timer() {

    const [count, setcount] = useState(0);

    const timerRef = useRef(null);

    const startTimer = () =>{
        timerRef.current = setInterval(()=>{
            setcount(prev => prev + 1);
        },1000);
    }
    
    const stopTimer = () =>{
        clearInterval(timerRef.current);
    }

  return (
    <div>
       <h1>
        Count : {count}
       </h1>

       <button onClick={startTimer}>Start Timer</button>
       <button onClick={stopTimer}>Stop Timer</button>
    </div>
  )
}

export default Timer