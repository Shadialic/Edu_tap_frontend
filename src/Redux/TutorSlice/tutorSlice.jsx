import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  userInfo: {},
};

export const userSlice = createSlice({
  name: "tutor",
  initialState: INITIAL_STATE,
  reducers: {
    setTutorDetailes: (state, action) => {
      state.userInfo = action.payload;
      console.log(action.payload, "-----------------------------------");
    },
    logoutDetails: (state) => {
      return INITIAL_STATE;
    },
  },
});

export const { setTutorDetailes, logoutDetails } = userSlice.actions;

export default userSlice.reducer;
