import { configureStore } from '@reduxjs/toolkit';
import signupReducer  from './features/auth/signupSlice';
import signipReducer  from './features/auth/signinSlice';




export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signipReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;