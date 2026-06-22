import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return await res.data;
});
export const usersSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state,action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default usersSlice.reducer;
