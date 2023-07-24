import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "users",
  initialState: {
    authUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    signinStart: (state) => {
      state.isFetching = true;
    },
    signinSuccess: (state, action) => {
      state.isFetching = false;
      state.authUser = action.payload;
      state.error = false;
    },
    signinFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
    },
    signOut: (state) => {
      state.authUser = null;
    },
    initAuth: (state, action) => {
      state.isFetching = false;
      state.authUser = action.payload;
      state.error = false;
    },

  },
});
export const {
  signinStart,
  signinSuccess,
  signinFailure,
  signOut,
  initAuth
} = userSlice.actions;


export default userSlice.reducer;
