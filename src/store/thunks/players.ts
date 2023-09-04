import createAppAsyncThunk from './createAppAsyncThunk'
import * as api from 'api'

export const fetchPlayers = createAppAsyncThunk(
  'players/fetch',
  async () => {
    return await api.players.fetchPlayers();
  }
)

export const addPlayer = createAppAsyncThunk(
  'players/add',
  async (arg, thunkAPI) => {
    const playerName: string = thunkAPI.getState().players.name
    const isAdded:boolean = await api.players.addPlayer(playerName)
    if (!isAdded) {
      console.error('Player was not added')
    }
    await thunkAPI.dispatch(fetchPlayers())
  }
)

export const deletePlayer = createAppAsyncThunk(
  'players/delete',
  async (uuidPlayer: string, thunkAPI) => {
    const isDeleted:boolean = await api.players.deletePlayer(uuidPlayer)
    if (!isDeleted) {
      console.error('Player was not deleted')
    }
    await thunkAPI.dispatch(fetchPlayers())
  }
)