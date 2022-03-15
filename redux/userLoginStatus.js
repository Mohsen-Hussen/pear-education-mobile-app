import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};
const userLoginStatus = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loginFalse(state) { state.login = false },
    loginTrue(state) { state.login = true },
  },
});

// Action creators are generated for each case reducer function
export const { loginFalse, loginTrue } = userLoginStatus.actions;

export default userLoginStatus.reducer;