import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: null,
  error: null,
};

const contactSlice = createSlice({
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

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
