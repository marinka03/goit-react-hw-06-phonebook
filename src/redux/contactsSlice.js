import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('contacts')) ?? [];

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');

export const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => [...state, action.payload])
    .addCase(deleteContact, (state, action) =>
      state.filter(contact => contact.id !== action.payload)
    );
});
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(localStorage.getItem('contacts')) ?? [],

  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {},
  },
});
console.dir(contactsSlice.actions.addContact);

// const arr = ['a', 'dog', 57, 88];

// const obj = {
//   cat: 2,
//   dog: {
//     tail: 1,
//     legs: 4,
//     name: 'Jack',
//     family: {
//       sister: 'Lysi',
//       mother: 'Maria',
//     },
//   },
// };

// const x = 5;
// const y = 10;
// console.log(x + y);
