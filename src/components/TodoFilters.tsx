import React from 'react';
import { useRecoilState } from 'recoil';
import { toDoListFilterState } from '../store/atoms/toDoListFilter';


const TodoFilters: React.FC = () => {

    const [filter, setFilter] = useRecoilState(toDoListFilterState);


    function handleFilter({ target: { value } }: any) {
        setFilter(value);
    }

    return (
        <>
            Filter:
            <select value={filter} onChange={e => handleFilter(e)}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    );
}

export default TodoFilters;