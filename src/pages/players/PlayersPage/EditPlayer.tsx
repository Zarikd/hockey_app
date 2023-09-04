import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { updateEditableName, updatePlayer } from '@/src/store/slices/players';

export const EditPlayer = () => {
  const dispatch = useAppDispatch()
  const editableName = useAppSelector(state => state.players.editableName)
  const _updatePlayer = () => {
    dispatch(updatePlayer())
  }
  const _updateEditableName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEditableName(e.target.value))
  }


  return (
    <div>
      <input value={editableName} onChange={_updateEditableName} />
      <button onClick={_updatePlayer}>update Player</button>
    </div>
  )
}