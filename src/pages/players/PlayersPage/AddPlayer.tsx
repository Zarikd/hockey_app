import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { updatePlayerName } from '@/src/store/slices/players';
import { addPlayer } from '@/src/store/thunks/players';

export const AddPlayer = () => {

  const dispatch = useAppDispatch()
  const inputName = useAppSelector(state => state.players.name)
  const _updateInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updatePlayerName(e.target.value))
  }
  const _addPlayer = () => {
    dispatch(addPlayer())
  }
  return (
    <div>
      <input value={inputName} onChange={_updateInputName} />
      <button onClick={_addPlayer}>Add Player</button>
    </div>
  )
}