import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PlayersState = {
    name: string
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
        updateInputName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setPlayer: (state, action: PayloadAction<string>) => {
            let idPlayer = state.playersList.length + 1;
            state.playersList = [...state.playersList, {
                id: idPlayer,
                playerName: action.payload
            }]
        }
    }
})

export const { setPlayer, updateInputName } = playersSlice.actions

export default playersSlice.reducer