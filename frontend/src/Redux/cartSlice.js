
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    fetchingCart: (state) => {
      state.isFetching = true;
    },
    fetchCartSuccess: (state, action) => {
      state.isFetching = false;
      state.items = action.payload;
      state.error = false;
    },
    fetchCartFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.message || "An unexpected error occured";
    }

  },
});
export const {
  fetchingCart,
  fetchCartSuccess,
  fetchCartFailure

} = cartSlice.actions;


export default cartSlice.reducer;
