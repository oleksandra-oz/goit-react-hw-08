import { createSlice } from "@reduxjs/toolkit";
import {fetchData, deleteContact, addContact} from './operations.js'
import { logoutThunk } from "../auth/operations.js";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
         loading: false,
    error: null
    },

    extraReducers:builder => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
            state.items = action.payload;
        })
            .addCase(fetchData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
        .addCase(logoutThunk.fulfilled, (state) => {
  state.items = [];
})
    }
});



export const contactsReducer = contactsSlice.reducer;
export const { fetchContacts, setIsError,setIsLoading } = contactsSlice.actions;
export default contactsSlice.reducer;