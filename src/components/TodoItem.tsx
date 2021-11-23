import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { TodoData, todoListState } from "../store/atoms/toDoList";


const TodoItem = (todo: TodoData) => {

    const [toDoList, setTodoList] = useRecoilState(todoListState);
    const [newValue, setNewValue] = useState(todo.value);

    const todoUpdate = useCallback(
        (dataId, options) => {
            setTodoList(
                toDoList.map((r) => {
                    if (r.id === dataId) {
                        r = {
                            ...r,
                            ...options,
                        };
                    }
                    return r;
                })
            );
        },
        [toDoList]
    );

    function toggleItemCompletion() {
        todoUpdate(todo.id, {
            isCompleted: !todo.isCompleted
        });
    }

    function editItemText() {

        todoUpdate(todo.id, {
            value: newValue
        });

    }

    function removeItemText() {
        const filteredItems = toDoList.filter(item => item.id !== todo.id);

        setTodoList(filteredItems);
    }

    return (
        <li>
            {todo.isCompleted ? (
                <span
                    style={{
                        color: 'green',
                        textDecoration: 'line-through'
                    }}
                >
                    {todo.value}
                </span>
            ) : (
                <>
                    <input type="text" value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                    />
                    {newValue !== todo.value && (

                        <button type="button" onClick={editItemText}>Save</button>
                    )}
                </>
            )}

            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={toggleItemCompletion}
            />
            <button type="button" onClick={removeItemText}>X</button>

        </li >
    );
}

export default TodoItem;