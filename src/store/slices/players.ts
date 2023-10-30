import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPlayers } from '../thunks/players'

export type PlayersState = {
  name: string
  playersList: Player[]
  editableUuid: string
  editableName: string
}

export type Player = {
  uuidPlayer: string,
  playerData: PlayerData,
  dateAdded: string
}

export type PlayerData = {
  playerName: string,
  gamePosition: string
}


const initialState: PlayersState = {
  name: '',
  playersList: [],
  editableName: '',
  editableUuid: ''
}

export const playersSlice = createSlice({
  name: 'playersSlice',
  initialState,
  reducers: {
    updatePlayerName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    updateEditableUuid: (state, action: PayloadAction<string>) => {
      const findedPlayer = state.playersList.find((player: Player) => player.uuidPlayer === action.payload)
      if (findedPlayer) {
        state.editableUuid = findedPlayer.uuidPlayer
        state.editableName = findedPlayer.playerData.playerName
      } else {
        state.editableUuid = ''
        state.editableName = ''
      }
    },
    updateEditableName: (state, action: PayloadAction<string>) => {
      state.editableName = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlayers.fulfilled, (state, action) => {
      state.playersList = action.payload;
    })
  }
})

export const { updatePlayerName, updateEditableName, updateEditableUuid } = playersSlice.actions

export default playersSlice.reducer