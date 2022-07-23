import { createSlice } from "@reduxjs/toolkit";

const schSlice = createSlice({
    name: "sch",
    initialState: {
        name: "黄果山一中",
        address: "花果山大街79号",
    },
    reducers: {
        setName(state, attion) {
            state.name = attion.payload;
        },
        setAddress(state, attion) {
            state.address = attion.payload;
        },
    },
});
export const { setName, setAddress } = schSlice.actions;
export const { reducer: schoolReducer } = schSlice;