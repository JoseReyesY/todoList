import { useState } from "react";

import styles from './form.module.css';

export default function Form({ todos, setTodos }) {
    // const [ todo, setTodo ] = useState("");
    const [ todo, setTodo ] = useState({ name: "", done: false });

    function handleSubmit(e) {
        e.preventDefault();

        // Add the todo to the list
        setTodos([...todos, todo]);
        // Reset the input
        setTodo({ name: "", done: false });
    }

    return(
        <form className={ styles.todoForm } onSubmit={handleSubmit} >
            <div className={ styles.inputContainer }>
                <input className={ styles.modernInput } type="text" onChange={ (e) => setTodo({name: e.target.value, done: false}) } value={ todo.name } placeholder="Enter todo item..." />
                <button className={ styles.modernButton } type="submit">Add</button>
            </div>
        </form>
    );
}