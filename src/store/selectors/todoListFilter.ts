import { selector } from "recoil";
import { todoListState } from "../atoms/toDoList";
import { toDoListFilterState } from "../atoms/toDoListFilter";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(toDoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isCompleted);

      case "Show Uncompleted":
        return list.filter((item) => !item.isCompleted);

      case "Show All":
        return list;
      default:
        return list;
    }
  },
});
