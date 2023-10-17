import { Input } from '@/src/components';
import { Button } from '@/src/components/Button/Button';
import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { updatePlayerName } from '@/src/store/slices/players';
import { addPlayer } from '@/src/store/thunks/players';

export const AddPlayer = () => {

  const dispatch = useAppDispatch()
  const inputName = useAppSelector(state => state.players.name)
  const _updateInputName = (newName: string) => {
    dispatch(updatePlayerName(newName))
  }
  const _addPlayer = () => {
    dispatch(addPlayer())
  }
  return (
    <div>
      <Input initValue={inputName} onChange={_updateInputName} />
      <Button onClick={_addPlayer}>Add Player</Button>
    </div>
  )
}