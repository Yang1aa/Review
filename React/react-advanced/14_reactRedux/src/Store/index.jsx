import { configureStore, createSlice } from "@reduxjs/toolkit";

const stuSlice = createSlice({
  name: stu,
  initialState: {
    name: "孙悟空",
    age: 18,
    gender: "男",
    address: "花果山",
  },
  reducers: {
    setName(state, attion) {
      state.name = attion.payload;
    },
    setAge() {
      state.age = attion.payload;
    },
  },
});
export const { setName, setAge } = stuSlice.actions;
const store = configureStore({
  reducer: {
    student: stuSlice.reducer,
  },
});
export default store;
