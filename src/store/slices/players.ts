import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppDispatch } from '@/src/shared/hooks/redux';
import { RootState } from '..';

export type PlayersState = {
    name: string
    playersList: Player[]
}

export type Player = {
    uuidPlayer: string,
    playerData: PlayerData
}

export type PlayerData = {
    playerName: string
}

export const fetchPlayers = createAsyncThunk('players/fetch', async () => {
    const response = await fetch('/api/players', { method: 'GET'})
    const data = response.json();
    return data;
})

export const addPlayer = createAsyncThunk<string, void, {state: RootState}>('players/add', async (userId, { getState, dispatch }) => {
    const playerName: string = getState().players.name;
    
    const response = await fetch('/api/players', {
        method: 'POST',
        body: JSON.stringify({playerName}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = response.json();

    await dispatch(fetchPlayers())

    return data;
})

const initialState: PlayersState = {
    name: '',
    playersList: []
}

export const playersSlice = createSlice({
    name: 'playersSlice',
    initialState,
    reducers: {
        updatePlayerName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlayers.fulfilled, (state, action) => {
            state.playersList = action.payload;
        })
    } 
})

export const { updatePlayerName } = playersSlice.actions

export default playersSlice.reducer