import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import players from './slices/players';
import auth from './slices/auth'

export const store = configureStore({
  reducer: {
    players,
    auth
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
