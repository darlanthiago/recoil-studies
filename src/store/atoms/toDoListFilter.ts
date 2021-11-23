import { atom } from "recoil";

type TodoListFilter = "Show All" | "Show Completed" | "Show Uncompleted";

export const toDoListFilterState = atom<TodoListFilter>({
  key: "toDoListFilterState",
  default: "Show All",
});
