import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AuthState = {
  isAuth: boolean,
  email: string | null
}

const initialState: AuthState = {
  isAuth: false,
  email: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuth = true
    },
    setLogin: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    }
  }
})

export const { setAuth, setLogin } = authSlice.actions

export default authSlice.reducer