import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PlayersState = {
    name?: string
    playersList: Object[]
}

const initialState: PlayersState = {
    name: '',
    playersList: [
        {
            id: 1,
            playerName: 'Midle Anton'
        },
        {
            id: 2,
            playerName: 'Zarik Dima'
        }
    ]
}

export const playersSlice = createSlice({
    name: 'playersSlice',
    initialState,
    reducers: {
        setPlayerName: (state, action: PayloadAction<string | undefined>) => {
            state.name = action.payload
        },
        addPlayer: (state, action: PayloadAction<Object>) => {
            let id = 3
            state.playersList.push(action.payload)
            id++
        }
    }
})

export const { setPlayerName, addPlayer } = playersSlice.actions

export default playersSlice.reducer