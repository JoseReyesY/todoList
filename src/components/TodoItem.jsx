import styles from './todoItem.module.css';

export default function TodoItem({ item, todos, setTodos }) {
    function handleDelete(item) {
        console.log('Delete button clicked for item', item);
        // It select all the todos which are not equal to the item
        setTodos(todos.filter((todo) => todo !== item));
    }

    return(
        <div className={ styles.item }>
            <div className={ styles.itemName }>
                { item }
                <span>
                    <button onClick={ () => handleDelete(item) } className={ styles.deleteButton }>x</button>
                </span>
            </div>
            <hr className={ styles.line } />
        </div>
    );
}