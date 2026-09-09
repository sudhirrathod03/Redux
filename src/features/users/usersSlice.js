import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  users: [],
  error: null,
  userId: 10,
};

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (arg, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    const res = await axios.get("hSDFQEWR");

    if (!res.ok) {
      // throw new Error("FAILED TO FETCH USERS!");goes to action.error
      return thunkAPI.rejectWithValue("WRONG API URL"); //goes to action.payload
    }
    return await res.data;
  }
);
export const usersSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log(action);
        /*
        
        type: 'user/fetchUsers/rejected', payload: 'WRONG API URL', meta: {…}, error: {…}}
        
        */
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default usersSlice.reducer;
