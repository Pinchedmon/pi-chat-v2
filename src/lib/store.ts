import { configureStore } from '@reduxjs/toolkit';
import signupReducer  from './features/auth/signupSlice';
import signipReducer  from './features/auth/signinSlice';
import postsWallReducer  from './features/posts/PostsWallSlice';



export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signipReducer,
    postsWall: postsWallReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;