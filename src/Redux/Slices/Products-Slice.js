import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Fetch all products from json server
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  }
);

// Fetch Single product by ID from json server
export const fetchProductById = createAsyncThunk(
  "productsSlice/fetchProductById",
  async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();
    return data;
  }
);

const productInitialState = {
  loading: false,
  error: "",
  data: [],
};

export const productsSlice = createSlice({
  initialState: productInitialState,
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    // Fetch all products stages
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    });

    // Fetch product by id stages
    builder.addCase(fetchProductById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = [action.payload];
    });
  },
});

export default productsSlice.reducer;
