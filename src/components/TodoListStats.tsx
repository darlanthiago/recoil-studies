import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../store/selectors/todoListStats';


const TodoListStats: React.FC = () => {

    const {
        totalNum,
        totalCompleteNum,
        totalUncompletedNum,
        percentComplete,
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentComplete);

    return (
        <ul>
            <li>Total items: {totalNum}</li>
            <li>Items completed: {totalCompleteNum}</li>
            <li>Items not completed: {totalUncompletedNum}</li>
            <li>Percent completed: {formattedPercentCompleted}%</li>
        </ul>
    );
}

export default TodoListStats;