import { selector } from "recoil";

import { textState } from "../atoms/text";

export const charCount = selector({
  key: "charCountText",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export const charToUpper = selector({
  key: "charToUpperText",
  get: ({ get }) => {
    const text = get(textState);

    return text.toUpperCase();
  },
});
