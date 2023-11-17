import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AuthState = {
  isAuth: boolean,
  email: string | null,
  password: string | null
}

const initialState: AuthState = {
  isAuth: false,
  email: null,
  password: null
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
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  }
})

export const { setAuth, setLogin, setPassword } = authSlice.actions

export default authSlice.reducer