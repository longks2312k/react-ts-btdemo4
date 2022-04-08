import { createSlice } from "@reduxjs/toolkit";

  export interface SearchState {
    searchText: string;
  }
  
  const initialState: SearchState = {
    searchText:''
  }
  
  export const searchSlice = createSlice({
    name: "search",
    initialState,
  
    reducers: {
      searchName: (state, action) => {
        state.searchText = action.payload
      }
    },
  });
  export const { searchName } = searchSlice.actions;

  export default searchSlice.reducer;