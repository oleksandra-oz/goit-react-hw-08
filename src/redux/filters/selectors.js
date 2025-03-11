import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = state => state.filter.search;
export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
});

