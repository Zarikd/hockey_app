import { Input } from '@/components';
import { Button } from '@/components/Button/Button';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { updatePlayerName } from '@/store/slices/players';
import { addPlayer } from '@/store/thunks/players';

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