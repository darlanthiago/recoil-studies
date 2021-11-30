import { atom } from "recoil";

export type UserData = {
  login: string;
  avatar_url: string;
  public_repos: number;
  loading: boolean;
};

export const userState = atom({
  key: "userState",
  default: {} as UserData,
});
