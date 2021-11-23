import React from 'react';
import { useRecoilValue } from 'recoil';
import { TodoData } from '../store/atoms/toDoList';
import { filteredTodoListState } from '../store/selectors/todoListFilter';
import TodoFilters from './TodoFilters';
import TodoItem from './TodoItem';
import TodoCreator from './TodoItemCreator';
import TodoListStats from './TodoListStats';


const TodoList = () => {


    const todos = useRecoilValue(filteredTodoListState);

    return (

        <>

            <TodoCreator />

            <TodoFilters />

            <ul>
                {todos.map((item: TodoData) => (
                    <TodoItem
                        value={item.value}
                        isCompleted={item.isCompleted}
                        id={item.id}
                        key={item.id}
                    />
                ))}
            </ul>

            <TodoListStats />
        </>
    );
}

export default TodoList;