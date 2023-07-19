import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { playersSlice } from './slices/players';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'




const persistConfig = {
    key: 'root',
    storage,
}

const persistedPlayersReducer = persistReducer(persistConfig, playersSlice)


export const store = configureStore({
    reducer: {
        players: playersSlice
    }
})

export const persistor = persistStore(store)


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
