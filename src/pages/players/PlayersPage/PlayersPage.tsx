import { useAppDispatch } from '@/src/shared/hooks/redux';
import { useEffect } from 'react';
import { AddPlayer } from './AddPlayer';
import { EditPlayer } from './EditPlayer';
import { PlayersTable } from './PlayersTable';
import { fetchPlayers } from '@/src/store/thunks/players';

export const PlayersPage = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [dispatch])


  return (
    <div>
      <PlayersTable />
      <AddPlayer />
      <EditPlayer />
    </div>
  )
}