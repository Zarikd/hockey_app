import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { fetchPlayers, addPlayer, updatePlayerName, deletePlayer } from '@/src/store/slices/players';
import { MouseEventHandler, useEffect } from 'react';

export const PlayersPage = () => {

    const players = useAppSelector(state => state.players.playersList)
    const inputName = useAppSelector(state => state.players.name)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPlayers())
    }, [dispatch])

    const _updateInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updatePlayerName(e.target.value))
    }

    const _addPlayer = () => {
        dispatch(addPlayer())
    }

    const _deletePlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
        const uuidPlayer: string | null = e.currentTarget.getAttribute('data-uuid')
        if (uuidPlayer) { dispatch(deletePlayer(uuidPlayer)) }
        else { return }
    }

    const allPlayersUI = players.map((item, index) => (
        <li key={index}>
            {item.playerData.playerName}
            <button data-uuid={item.uuidPlayer} onClick={_deletePlayer}>Delete</button>
            <span>{item.uuidPlayer}</span>
        </li>
    ))

    return (
        <div>
            <h2>Players list</h2>
            <ul>
                {allPlayersUI}
            </ul>
            <input value={inputName} onChange={_updateInputName} />
            <button onClick={_addPlayer}>Add Player</button>
        </div>
    )
}