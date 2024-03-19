import { atom } from "recoil";
let DataFromLocal = atom({
  key: `DataFromLocal`,
  default: {
    data: Object.keys(localStorage),
    state: "read",
  },
});
export default DataFromLocal;
