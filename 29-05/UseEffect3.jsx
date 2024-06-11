import { useEffect, useState } from "react";

function UseEffect3(){
    const[counter,setCounter]=useState(0);
    const[isLoggedIn,setisLoggedIn]=useState(true);
    function Switch(){
        setisLoggedIn((prevState)=>!prevState)
    }

    function Increment(){
        setCounter(counter+1);
    }

    useEffect(()=> {alert("Calling from useeffect for isLoggedIn.");},[isLoggedIn]);

    return(
        
        <div>
            {isLoggedIn?(<button onClick={Switch}>Please login!</button>):(<button onClick={Switch}>Welcome! logout?</button>)}
            {counter>=10 && counter<=20 ? (<h1>Counter is in between 10-20.</h1>):(<h1>Counter is out of range.</h1>)}
            {/* <h2 onClick={countertentwenty}>{isTenTwenty}</h2> */}
            <h1>Counter:    {counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={()=>setCounter(counter-1)}>-</button>
        </div>
    );
}

export default UseEffect3;
