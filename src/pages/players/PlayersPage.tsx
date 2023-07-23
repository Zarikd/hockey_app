import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { fetchPlayers, setPlayer, updateInputName } from '@/src/store/slices/players';

export const PlayersPage = () => {
    const players = useAppSelector(state => state.players.playersList)
    const inputName = useAppSelector(state => state.players.name)
    const dispath = useAppDispatch()
    dispath(fetchPlayers())
    return (
        <div>
            <h2>Players list</h2>
            <ul>
                {players.map((item, index) => (<li key={index}>{item.playerName}</li>))}
            </ul>
            <input type="text" placeholder='' value={inputName} onChange={e => dispath(updateInputName(e.target.value))} />
            <button onClick={() => dispath(setPlayer(inputName))}>Add Player</button>
        </div>
    );
}


