import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export type PlayersState = {
    name: string
    playersList: Player[]
}

export type Player = {
    id: string,
    playerName: string
}

export const fetchPlayers = createAsyncThunk('person/fetch', async (thunkAPI) => {
    const response = await fetch('/api/players', { method: 'GET'})
    const data = response.json();
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
        updateInputName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setPlayer: (state, action: PayloadAction<string>) => {
            state.playersList = [...state.playersList, {
                id: uuidv4(),
                playerName: action.payload
            }]
            state.name = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlayers.fulfilled, (state, action) => {
            state.playersList = action.payload;
        })
    } 
})

export const { setPlayer, updateInputName } = playersSlice.actions

export default playersSlice.reducer