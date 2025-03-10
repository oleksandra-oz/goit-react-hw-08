import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

// Об'єднання редюсерів
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});

// Створення store без redux-persist
const store = configureStore({
  reducer: rootReducer,
});

export default store;