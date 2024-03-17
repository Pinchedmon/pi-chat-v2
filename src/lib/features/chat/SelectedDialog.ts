import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface selectedDialogState {
  
    mutate?: () => void;
    mutateDialogs?: () => void;
}

const initialState: selectedDialogState = {
  
}

export const selectedDialogSlice = createSlice({
  name: 'postsWall',
  initialState,
  reducers: {
    setMutate: (state, action: PayloadAction<() => void>)=> {
      state.mutate = action.payload
    },
    setMutateDialogs: (state, action: PayloadAction<() => void>)=> {
      state.mutateDialogs = action.payload
    }
  }
})

export const {setMutate, setMutateDialogs } = selectedDialogSlice.actions

export default selectedDialogSlice.reducer