import { createSelector, createSlice } from "@reduxjs/toolkit";
import {fetchData, deleteContact, addContact} from './contactsOps.js'
import { selectNameFilter } from "./filtersSlice.js";

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
    }
});


/// generel selectors 

export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
});

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;


/// auth selectors

export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const contactsReducer = contactsSlice.reducer;
export const { fetchContacts, setIsError,setIsLoading } = contactsSlice.actions;
export default contactsSlice.reducer;