import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: false,
};
const userLoginStatus = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loginFalse: (state) => { state.loginStatus = false },
    loginTrue: (state) => { state.loginStatus = true },
  },
});

// Action creators are generated for each case reducer function
export const { loginFalse, loginTrue } = userLoginStatus.actions;

export default userLoginStatus.reducer;