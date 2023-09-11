import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:8000/api/auth"; // Api url

export const Signup = createAsyncThunk(
  "authSlice/Signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${api}/signup`, userData);
      return { data: response.data, error: "" };
    } catch (err) {
      if (err.response && err.response.status === 400) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(
          "An error occured during signup. Please try again."
        );
      }
    }
  }
);

export const Login = createAsyncThunk(
  "authSlice/Login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${api}/login`, userData);
      return { data: response.data, error: "" };
    } catch (err) {
      if (err.response && err.response.status === 401) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(
          "An error occured during login. Please try again."
        );
      }
    }
  }
);

const initialState = {
  user: null,
  token: null,
  signuploading: false,
  loginloading: false,
  signupError: "",
  loginError: "",
};

export const authSlice = createSlice({
  initialState: initialState,
  name: "authSlice",
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.signuploading = false;
      state.loginloading = false;
      state.loginError = "";
      state.signupError = "";
    },
  },
  extraReducers: (builder) => {
    // Signup state
    builder.addCase(Signup.pending, (state) => {
      state.signuploading = true;
      state.user = null;
      state.token = null;
      state.signupError = "";
    });
    builder.addCase(Signup.fulfilled, (state, action) => {
      state.signuploading = false;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.signupError = "";
    });
    builder.addCase(Signup.rejected, (state, action) => {
      state.signuploading = false;
      state.user = null;
      state.token = null;
      state.signupError =
        action.payload || "An error occured during signup. Please try again.";
    });
    // Login state
    builder.addCase(Login.pending, (state) => {
      state.loginloading = true;
      state.user = null;
      state.token = null;
      state.loginError = "";
    });
    builder.addCase(Login.fulfilled, (state, action) => {
      state.loginloading = false;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.loginError = "";
    });
    builder.addCase(Login.rejected, (state, action) => {
      state.loginloading = false;
      state.user = null;
      state.token = null;
      state.loginError =
        action.payload || "An error occured during login. Please try again.";
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
