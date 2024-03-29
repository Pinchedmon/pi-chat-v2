import { configureStore } from '@reduxjs/toolkit';
import signupReducer  from './features/auth/signupSlice';
import signipReducer  from './features/auth/signinSlice';
import postsWallReducer  from './features/posts/PostsWallSlice';
import groupsWallReducer  from './features/groups/GroupsWallSlice';
import SelectedDialogReducer from './features/chat/SelectedDialog';


export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signipReducer,
    postsWall: postsWallReducer,
    selectedDialog: SelectedDialogReducer,
    groupWall: groupsWallReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;