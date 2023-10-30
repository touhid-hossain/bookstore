import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "All",
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    //filter-books
    filterBooks: (state, action) => {
      state.status = action.payload;
    },
    //search books
    searchBooks: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { filterBooks, searchBooks } = filterSlice.actions;
