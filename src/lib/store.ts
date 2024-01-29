import { configureStore } from '@reduxjs/toolkit';
import signupReducer  from './features/auth/signupSlice';
import signinReducer  from './features/auth/signinSlice';



export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;