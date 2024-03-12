import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SignupState {
    mutate?: () => void;
}

const initialState: SignupState = {
}

export const postsWallSlice = createSlice({
  name: 'postsWall',
  initialState,
  reducers: {
    setMutate: (state, action: PayloadAction<() => void>)  => {
        state.mutate = action.payload;
    },
  }
})

export const {setMutate } = postsWallSlice.actions

export default postsWallSlice.reducer