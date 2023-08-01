import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchPlayers} from '../thunks/players'

export type PlayersState = {
    name: string
    playersList: Player[]
}

export type Player = {
    uuidPlayer: string,
    playerData: PlayerData,
    dateAdded: string
}

export type PlayerData = {
    playerName: string
}

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

export const {updatePlayerName} = playersSlice.actions

export default playersSlice.reducer