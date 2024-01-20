import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  tutorName: "",
  phone: "",
  email: "",
  image: "",
  is_admin: "",
};

const tutorSlice = createSlice({
  name: "tutor",
  initialState,
  reducers: {
    setTutorDetailes: (state, action) => {
      (state.id = action.payload.id),
        (state.tutorName = action.payload.tutorName),
        (state.email = action.payload.email),
        (state.phone = action.payload.phone),
        (state.image = action.payload.image);
    },
    logoutDetails: (state, action) => {
      state.id = "";
      state.tutorName = "";
      state.phone = "";
      state.image = "";
      state.email = "";
    },
  },
});

export const { setTutorDetailes, logoutDetails } = tutorSlice.actions;
export default tutorSlice.reducer;
