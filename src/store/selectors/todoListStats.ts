import { selector } from "recoil";
import { todoListState } from "../atoms/toDoList";

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);

    const totalNum = todoList.length;

    const totalCompleteNum = todoList.filter((item) => item.isCompleted).length;

    const totalUncompletedNum = todoList.filter((item) => !item.isCompleted)
      .length;

    const percentComplete =
      totalNum === 0 ? 0 : (totalCompleteNum / totalNum) * 100;

    return {
      totalNum,
      totalCompleteNum,
      totalUncompletedNum,
      percentComplete,
    };
  },
});
