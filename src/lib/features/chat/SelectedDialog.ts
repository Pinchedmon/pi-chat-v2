import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface selectedDialogState {
    username: string;
    avatar: string;
}

const initialState: selectedDialogState = {
  username: '',
  avatar: ''
}

export const selectedDialogSlice = createSlice({
  name: 'postsWall',
  initialState,
  reducers: {
    setDialog: (state, action: PayloadAction<selectedDialogState>)  => {
      state.username = action.payload.username;
      state.avatar = action.payload.avatar;
    },
  }
})

export const {setDialog } = selectedDialogSlice.actions

export default selectedDialogSlice.reducer