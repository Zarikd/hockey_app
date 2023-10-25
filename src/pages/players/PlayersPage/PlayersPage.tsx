import { useAppDispatch } from '@/src/shared/hooks/redux';
import { useEffect } from 'react';
import { AddPlayer } from './AddPlayer';
import { EditPlayer } from './EditPlayer';
import { PlayersTable } from './PlayersTable';
import { fetchPlayers } from '@/src/store/thunks/players';
import { FC, useState } from 'react';
import { Jarcy } from '@/src/components/Icons';
import s from './PlayerPage.module.scss'

export const PlayersPage = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [dispatch])

  const [isActive, setActive] = useState<boolean>(false)
  const setActiveHandle = (data: boolean) => {
    setActive(data)
  }

  return (
    <div>
      <div className={s.jarcy}><Jarcy variant={'white'} />состав</div>
      <PlayersTable isEditPlayerActive={setActiveHandle} />
      <AddPlayer />
      {isActive &&
        <EditPlayer onClose={() => { setActive(false) }} />}
    </div>
  )
}