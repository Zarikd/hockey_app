import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { fetchPlayers, addPlayer, updatePlayerName } from '@/src/store/slices/players';
import { useEffect } from 'react';

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

    const allPlayersUI = players.map((item, index) => (
        <li key={index}>{item.playerData.playerName}</li>
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