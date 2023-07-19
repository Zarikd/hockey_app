import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import playersSlice from './slices/players';

export const store = configureStore({
    reducer: {
        players: playersSlice
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
