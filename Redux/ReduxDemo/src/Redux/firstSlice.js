import { createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
  name: "first", //^name of the slic

  initialState: {
    //^ inital states
    username: "",
    age: 0,
    language: "",
    dataAvailable: false,
  },
  reducers: {
    //^ reducers methods
    changeUserData: (state, userObj) => {
      alert("Updating data!!");
      state.username = userObj.payload.username;
      state.age = userObj.payload.age;
      state.language = userObj.payload.language;
      state.dataAvailable = true;
    },

    getUserData: (state) => {
      alert("sending data");
      return {
        username: state.username,
        age: state.age,
        language: state.language,
      };
    },
  },
});
//^ export reducer methods
export const { changeUserData, getUserData } = firstSlice.actions;

//^ export slice
export default firstSlice.reducer;
