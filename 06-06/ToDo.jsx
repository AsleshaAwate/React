import React, { useState } from 'react'

const ToDo = () => {
    const[todo, setTodo]=useState("");
    const[allTodo, setAllTodo]=useState([]);

    function handleChange(event){
        setTodo(event.target.value);
    }

    function handleSubmit(){
        setAllTodo([...allTodo,todo])
        setTodo("");
    }

    function deleteTodo(index){
        const taskcopy=[...allTodo];
        taskcopy.splice(index,1);
        setAllTodo(taskcopy);
    }
  return (
    <div>
        <h1>Todo</h1>
        <input value={todo} onChange={handleChange}/><br/>
        <button onClick={handleSubmit}>Submit</button>
        <h2>All Todo</h2>
        {allTodo.map((todo, i)=>(
            <div key={i} 
                style={{
                display:"flex",
                width:"16%",
                justifyContent: "space-between",
                margin: "auto",
                marginTop:"10px"
            }}>
                
                <span>{""}
                    {i+1} . {todo}</span>
                <button onClick={deleteTodo}>Delete</button>
            </div>))}
        
    </div>
  );
}

export default ToDo