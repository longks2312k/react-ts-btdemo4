import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPayment = createAsyncThunk("payment/getPayment", async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
});

// export interface SearchState {
//   searchText: string;
// }

// const initialState: SearchState = {
//   searchText: "",
// };

export const searchSlice = createSlice({
  name: "payment",
  initialState: {
      list: [],
      status: null,
  },

  reducers: {
    searchName: (state, action) => {
      state
    },
  },

  extraReducers: {
    
  },    
});
export const { searchName } = searchSlice.actions;

export default searchSlice.reducer;
