import { atom } from "recoil";

export type TodoData = {
  id: string;
  value: string;
  isCompleted: boolean;
};

export const todoListState = atom<TodoData[]>({
  key: "todoListState",
  default: [],
});
