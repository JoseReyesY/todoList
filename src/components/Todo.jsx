import { useState } from "react"

export default function Todo() {
    const [ todo, setTodo ] = useState("");
    const [ todos, setTodos ] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        // Add the todo to the list
        setTodos([...todos, todo]);
        // Reset the input
        setTodo('');
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" onChange={ (e) => setTodo(e.target.value) } value={ todo } />
                <button type="submit">Add</button>
            </form>
            { console.log(todos) }
        </div>
    );
}