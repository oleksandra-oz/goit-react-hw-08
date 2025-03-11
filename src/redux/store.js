import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/slice';
import { filtersReducer } from './filters/slice';
import { authReducer } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'auth-data',
  version: 1,
  storage,
  whitelist: ['token']
}

const persistedReducer = persistReducer(persistConfig, authReducer)
 
// Об'єднання редюсерів
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
  auth: persistedReducer,
});

// Створення store без redux-persist
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools:false,
});

export let persistor = persistStore(store);
export default store;