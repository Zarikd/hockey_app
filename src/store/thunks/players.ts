import { Player } from '../slices/players';
import createAppAsyncThunk from './createAppAsyncThunk'
import * as api from '@/api'


export const fetchPlayers = createAppAsyncThunk(
  'players/fetch',
  async () => {
    return await api.players.fetchPlayers();
  }
)

export const addPlayer = createAppAsyncThunk(
  'players/add',
  async (arg, thunkAPI) => {
    const playerName: string = thunkAPI.getState().players.name;
    const isAdded: boolean = await api.players.addPlayer(playerName)
    if (!isAdded) {
      console.error('Player was not added')
    }
    await thunkAPI.dispatch(fetchPlayers())
  }
)


export const deletePlayer = createAppAsyncThunk(
  'players/delete',
  async (uuidPlayer: string, thunkAPI) => {
    const isDeleted: boolean = await api.players.deletePlayer(uuidPlayer)
    if (!isDeleted) {
      console.error('Player was not deleted')
    }
    await thunkAPI.dispatch(fetchPlayers())
  }
)

export const updatePlayer = createAppAsyncThunk(
  'players/update',
  async (arg, thunkAPI) => {
    const uuid: string = thunkAPI.getState().players.editableUuid;
    const playerName: string = thunkAPI.getState().players.editableName;
    const isUpdated: boolean = await api.players.updatePlayer(uuid, playerName)

    if (!isUpdated) {
      console.error('Player was not updated')
    }

    await thunkAPI.dispatch(fetchPlayers())
  })

export const savePlayer = createAppAsyncThunk(
  'players/update',
  async (player: Player, thunkAPI) => {
    const isUpdated: boolean = await api.players.savePlayer(player)

    if (!isUpdated) {
      console.error('Player was not updated')
    }

    await thunkAPI.dispatch(fetchPlayers())
  })
