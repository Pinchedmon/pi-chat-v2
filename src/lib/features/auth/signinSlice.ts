
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SignupState {
    error: string;
}

const initialState: SignupState = {
    error: ''
}

export const signupSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>)  => {
         state.error = action.payload;
    },
  }
})

export const {setError  } = signupSlice.actions



export default signupSlice.reducer