import { configureStore } from '@reduxjs/toolkit';
import { petReducer, selectionReducer } from './slices';

export const store = configureStore({
  reducer: {
    pets: petReducer,
    selection: selectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['pets/fetchPets/fulfilled', 'pets/fetchPetById/fulfilled'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
