import { Reducer } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

interface InitialReducers {
  [key: string]: Reducer;
}

export function createReducerManager(initialReducers: InitialReducers) {
  // Create an object which maps keys to reducers
  const reducers: InitialReducers = { ...initialReducers };

  // Create the initial combinedReducer
  let combinedReducer = createReducer({}, (builder) => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      builder.addCase(key, reducer);
    });
  });

  // An array which is used to delete state keys when reducers are removed
  const keysToRemove: string[] = [];

  return {
    getReducerMap: () => reducers,

    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: (state: any, action: any) => {
      // If any reducers have been removed, clean up their state first
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove.length = 0;
      }

      // Delegate to the combined reducer
      return combinedReducer(state, action);
    },

    // Adds a new reducer with the specified key
    add: (key: string, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      // Add the reducer to the reducer mapping
      reducers[key] = reducer;

      // Generate a new combined reducer
      combinedReducer = createReducer({}, (builder) => {
        Object.entries(reducers).forEach(([key, reducer]) => {
          builder.addCase(key, reducer);
        });
      });
    },

    // Removes a reducer with the specified key
    remove: (key: string) => {
      if (!key || !reducers[key]) {
        return;
      }

      // Remove it from the reducer mapping
      delete reducers[key];

      // Add the key to the list of keys to clean up
      keysToRemove.push(key);

      // Generate a new combined reducer
      combinedReducer = createReducer({}, (builder) => {
        Object.entries(reducers).forEach(([key, reducer]) => {
          builder.addCase(key, reducer);
        });
      });
    },
  };
}