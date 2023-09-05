import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  initialState: "",
  name: "categoriesSlice",
  reducers: {
    setCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const {setCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;