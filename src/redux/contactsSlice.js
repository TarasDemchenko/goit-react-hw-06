import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  // loading: null,
  // error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter((contact) => contact.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;
