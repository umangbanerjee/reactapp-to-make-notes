import { selector } from "recoil";
import DataFromLocal from "./DataFromLocal";
let processed = selector({
  key: "Processed Data",
  get: ({ get }) => {
    const dataKeys = get(DataFromLocal); // Accessing atom's value using `get`
    return dataKeys.data.map((key) => {
      return JSON.parse(localStorage.getItem(key));
    });
  },
});
export default processed;
