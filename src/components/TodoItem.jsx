import styles from './todoItem.module.css';

export default function TodoItem({ item, todos, setTodos }) {
    function handleCompleted(name) {
        console.log('Item completed', name);
        setTodos(todos.map((todo) => todo.name === name ? { ...todo, done: !todo.done } : todo));
    }

    function handleDelete(name) {
        console.log('Delete button clicked for item', name);
        // It select all the todos which are not equal to the item
        setTodos(todos.filter((todo) => todo.name !== name));
    }

    const completedClass = item.done ? styles.completed : "";

    return(
        <div className={ styles.item }>
            <div className={ styles.itemName }>
                <span onClick={ () => handleCompleted(item.name) } className={ completedClass }>{ item.name }</span>
                <span>
                    <button onClick={ () => handleDelete(item.name) } className={ styles.deleteButton }>x</button>
                </span>
            </div>
            <hr className={ styles.line } />
        </div>
    );
}