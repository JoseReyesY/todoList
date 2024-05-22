import { useState } from "react";

export default function Form({ todos, setTodos }) {
    const [ todo, setTodo ] = useState("");
    function handleSubmit(e) {
        e.preventDefault();

        // Add the todo to the list
        setTodos([...todos, todo]);
        // Reset the input
        setTodo('');
    }

    return(
        <form onSubmit={handleSubmit} >
            <input type="text" onChange={ (e) => setTodo(e.target.value) } value={ todo } />
            <button type="submit">Add</button>
        </form>
    );
}