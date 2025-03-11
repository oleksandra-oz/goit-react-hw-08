import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
    },
    reducers: {
        changeFilter: (state, action) => {
            state.search = action.payload;
        },
    }
});

export const selectNameFilter = state => state.filter.search;

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;