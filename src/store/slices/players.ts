import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppDispatch } from '@/src/shared/hooks/redux';
import { RootState } from '..';

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
    playerName: string
}

export const fetchPlayers = createAsyncThunk('players/fetch', async () => {
    const response = await fetch('/api/players', { method: 'GET' })
    const data = response.json();
    return data;
})

export const addPlayer = createAsyncThunk<string, void, { state: RootState }>('players/add', async (userId, { getState, dispatch }) => {
    const playerName: string = getState().players.name;

    const response = await fetch('/api/players', {
        method: 'POST',
        body: JSON.stringify({ playerName }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();

    await dispatch(fetchPlayers())

    return data;
})

export const updatePlayer = createAsyncThunk<void, void, { state: RootState }>('players/update', async (userId, { getState, dispatch }) => {
    const uuid: string = getState().players.editableUuid;
    const playerName: string = getState().players.editableName;

    const response = await fetch(`/api/players/${uuid}`, {
        method: 'PUT',
        body: JSON.stringify({ playerName }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    await dispatch(fetchPlayers())
})

export const deletePlayer = createAsyncThunk('players/delete', async (uuidPlayer: string, { dispatch }) => {

    const response = await fetch('/api/players', {
        method: 'DELETE',
        body: JSON.stringify({ uuidPlayer }),
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