import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { updateEditableUuid } from '@/src/store/slices/players';
import { deletePlayer } from '@/src/store/thunks/players';
import { FC } from 'react';

interface PlayersTableProps {
  isEditPlayerActive?: (data: boolean) => void
}
export const PlayersTable: FC<PlayersTableProps> = ({ isEditPlayerActive }) => {

  const players = useAppSelector(state => state.players.playersList)
  const dispatch = useAppDispatch()

  const _edditPlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const uuidPlayer: string | null = e.currentTarget.getAttribute('data-uuid')
    if (uuidPlayer) {
      dispatch(updateEditableUuid(uuidPlayer))
      isEditPlayerActive ? isEditPlayerActive(true) :
        null
    }
    else { return }
  }

  // const _deletePlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const uuidPlayer: string | null = e.currentTarget.getAttribute('data-uuid')
  //   if (uuidPlayer) { dispatch(deletePlayer(uuidPlayer)) }
  //   else { return }
  // }

  const allPlayersUI = players.map((item, index) => (
    <li key={index}>
      {item.playerData.playerName}
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