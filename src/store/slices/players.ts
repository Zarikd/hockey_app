import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export type PlayersState = {
    name: string
    playersList: Player[]
}

export type Player = {
    id: string,
    playerName: string
}

const initialState: PlayersState = {
    name: '',
    playersList: [
        {
            id: uuidv4(),
            playerName: 'Middle Anton'
        },
        {
            id: uuidv4(),
            playerName: 'Zarik Dima'
        }
    ]
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
    }
})

export const { setPlayer, updateInputName } = playersSlice.actions

export default playersSlice.reducer