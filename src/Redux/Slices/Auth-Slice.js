import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  initialState: initialState,
  name: "authSlice",
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
