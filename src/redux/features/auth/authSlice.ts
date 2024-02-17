import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    regiUser: (state, action) => {
      const { name, email, password } = action.payload;
      console.log("Registration Data:", { name, email, password });
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
