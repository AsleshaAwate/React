import { useEffect, useState } from "react";

function UseEffect(){
    const [counter,setCounter]=useState(1);
    const [counter2,setCounter2]=useState(1);

    useEffect(()=>{alert("Inside Function"); console.log("Inside function")})

    return(
        <div>
            <h1>UseEffect : Type 1 :- No dependency</h1>
            <h2>Counter1:    {counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>+</button>

            <h2>Counter2:    {counter2}</h2>
            <button onClick={()=>setCounter2(counter2+1)}>+</button>
        </div>
    );
}

export default UseEffect;