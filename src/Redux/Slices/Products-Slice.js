import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  }
);

export const fetchProductById = createAsyncThunk(
  "productsSlice/fetchProductById",
  async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();
    return data;
  }
);

export const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      return [action.payload];
    });
  },
});

export default productsSlice.reducer;
