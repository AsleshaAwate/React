import { useState, useEffect } from "react";

// function FunctionProp(){
//     function HandleClick(){
//         alert("Clicked.")
//         console.log("Clicked")
//     }



//     return(
//         <div>
//             <h1>Function Prop</h1>
//             <ChildrenComponent buttonValue="Click here!" HandleClick={HandleClick} />
//         </div>
//     );
// }

// function ChildrenComponent({buttonValue, HandleClick}){
//     return <button onClick={HandleClick}>{buttonValue}</button>
// }

function FunctionProp(){
    const [counter,setCounter]=useState(0);
    function Increment(){
        setCounter(counter+1);
    }

    function Decrement(){
        if(counter>=1){
        setCounter(counter-1);
        }
    }

    useEffect(() => {
        console.log('Count updated:', counter);
      }, [counter]);
    

    return(
        <div>
            <h1>Counter:    {counter}</h1>
            <ChildrenComponent Increment={Increment} Decrement={Decrement} />
        </div>
    );
}

function ChildrenComponent({Increment, Decrement}){
    return <div>
        
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            </div>
}

export default FunctionProp;