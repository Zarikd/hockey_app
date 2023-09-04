import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { updateEditableUuid } from '@/src/store/slices/players';
import { deletePlayer } from '@/src/store/thunks/players';

export const PlayersTable = () => {

  const players = useAppSelector(state => state.players.playersList)
  const dispatch = useAppDispatch()


  const _edditPlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const uuidPlayer: string | null = e.currentTarget.getAttribute('data-uuid')
    if (uuidPlayer) { dispatch(updateEditableUuid(uuidPlayer)) }
    else { return }
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
      <button data-uuid={item.uuidPlayer} onClick={_edditPlayer}>Edit</button>
      <span>{item.uuidPlayer}</span>
    </li>
  ))

  return (
    <div>
      <h2>Players list</h2>
      <ul>
        {allPlayersUI}
      </ul>
    </div>
  )
}