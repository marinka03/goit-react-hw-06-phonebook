import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = '';
export const filterContact = createAction('filter/filterContact');

export const filterReducer = createReducer(initialState, builder => {
  builder.addCase(filterContact, (_, action) => action.payload);
});

