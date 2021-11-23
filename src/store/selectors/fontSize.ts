import { selector } from "recoil";
import { fontSizeState } from "../atoms/fontSize";

export const fontSizeLabel = selector({
  key: "fontSizeLabel",
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = "px";

    return `${fontSize}${unit}`;
  },
});
