import { configureStore } from '@reduxjs/toolkit';
import { createReducerManager } from './createReducerManager';
import signupReducer  from './features/auth/signupSlice';

const staticReducers = {
    signup: signupReducer,
};

export const makeStore = () => {
  const reducerManager = createReducerManager(staticReducers);
  return configureStore({
    reducer: reducerManager.reduce,
  });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];