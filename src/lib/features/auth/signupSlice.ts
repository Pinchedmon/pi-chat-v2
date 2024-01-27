import { RootState } from '@/lib/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface SignupState {
  tag: string;
  img?: string;
  username: string;
  password: string;

}

interface IWelcomeForm {
    tag: string;
    password: string;
    secPassword: string;
}

interface IFinishForm {
    username: string;
    img?: string;
}
const initialState: SignupState = {
    tag: '',
    username: '',
    password: '',
}

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setWelcomeForm: (state, action: PayloadAction<IWelcomeForm>)  => {
        state.tag = action.payload.tag;
        state.password = action.payload.password;
    },
    setFinishForm: (state, action: PayloadAction<IFinishForm>)  => {
        state.img = action.payload.img;
        state.username = action.payload.username;
    },

  }
})

export const {  } = signupSlice.actions



export default signupSlice.reducer