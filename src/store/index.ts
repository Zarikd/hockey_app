import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import players from './slices/players';

export const store = configureStore({
    reducer: {
        players
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
