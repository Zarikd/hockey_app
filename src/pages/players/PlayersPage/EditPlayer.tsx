import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { updateEditableName } from '@/src/store/slices/players';
import { deletePlayer, updatePlayer } from '@/src/store/thunks/players';
import { FC } from 'react';
import s from './PlayerPage.module.scss'
import { Modal } from '@/src/components';

interface EditPlayerProps {
  isActive?: boolean
  data_uuid?: string
  onClose: () => void
}

export const EditPlayer: FC<EditPlayerProps> = ({
  isActive = true,
  data_uuid = '',
  onClose
}) => {
  const dispatch = useAppDispatch()
  const editableName = useAppSelector(state => state.players.editableName)
  const uuidPlayer = useAppSelector(state => state.players.editableUuid)
  const _updatePlayer = () => {
    dispatch(updatePlayer())
  }
  const _updateEditableName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEditableName(e.target.value))
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
            <input value={editableName} onChange={_updateEditableName} />
            <button onClick={_updatePlayer}>update Player</button>
          </div>
        </div>
      </Modal>
    </>
  )
}