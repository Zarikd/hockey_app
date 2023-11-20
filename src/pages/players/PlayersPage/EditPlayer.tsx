import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { updateEditableName } from '@/store/slices/players';
import { deletePlayer, updatePlayer } from '@/store/thunks/players';
import { FC } from 'react';
import s from './PlayerPage.module.scss'
import { Input, Modal } from '@/components';

interface EditPlayerProps {
  isActive?: boolean
  data_uuid?: string
  onClose: () => void
}

export const EditPlayer: FC<EditPlayerProps> = ({
  isActive = true,
  data_uuid = '',
  onClose,
}) => {
  const dispatch = useAppDispatch()
  const editableName = useAppSelector(state => state.players.editableName)
  const uuidPlayer = useAppSelector(state => state.players.editableUuid)
  const _updatePlayer = () => {
    dispatch(updatePlayer())
  }
  const _updateEditableName = (newValue: string) => {
    dispatch(updateEditableName(newValue))
  }
  const _deletePlayer = () => {
    const uuidDeletedPlayer = uuidPlayer
    if (uuidDeletedPlayer) { dispatch(deletePlayer(uuidDeletedPlayer)) }
    else { return }
  }

  return (
    <>
      <Modal onClose={onClose}>
        <div className={s.editModal} onClick={e => e.stopPropagation()}>
          <button onClick={_deletePlayer}>Delete</button>
          <div>
            <Input initValue={editableName} onChange={_updateEditableName} />
            <button onClick={_updatePlayer}>update Player</button>
          </div>
        </div>
      </Modal>
    </>
  )
}