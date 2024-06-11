import { useEffect, useState } from "react";

function UseEffect2() {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    alert("Welcome");
  }, []);
  return (
    <div>
    <h1>UseEffect : Type 2 :- Empty dependencies</h1>
      <h1>Welcome {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default UseEffect2;