import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SignupState {
    mutate?: () => void;
    mutateSec?: () => void
}

const initialState: SignupState = {
}

export const groupsWallSlice = createSlice({
  name: 'postsWall',
  initialState,
  reducers: {
    setMutate: (state, action: PayloadAction<() => void>)  => {
        state.mutate = action.payload;
    },
    setSecMutate: (state, action: PayloadAction<() => void>)  => {
      state.mutateSec = action.payload;
  },

  }
})

export const {setMutate,setSecMutate } = groupsWallSlice.actions

export default groupsWallSlice.reducer