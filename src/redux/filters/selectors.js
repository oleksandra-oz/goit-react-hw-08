import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from './../contactsSlice';

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
});

export const selectNameFilter = state => state.filter.search;