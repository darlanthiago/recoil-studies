import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import { todoListState } from '../store/atoms/toDoList';
// import { Container } from './styles';

const TodoCreator: React.FC = () => {

    const [newItem, setNewItem] = useState("");
    const [todoList, setTodoList] = useRecoilState(todoListState);

    function handleAddNewItem() {

        if (!newItem) {
            return;
        }

        setTodoList(() => [
            ...todoList,
            {
                id: uuidv4(),
                value: newItem,
                isCompleted: false
            }
        ]);

        setNewItem('');

    }

    return (
        <div>
            <input type="text" value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />
            <button type="button" onClick={handleAddNewItem}>Add</button>
        </div>
    );
}

export default TodoCreator;