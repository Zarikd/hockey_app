import { useAppDispatch } from '@/src/shared/hooks/redux';
import { fetchPlayers } from '@/src/store/slices/players';
import { useEffect } from 'react';
import { AddPlayer } from './AddPlayer';
import { EditPlayer } from './EditPlayer';
import { PlayersTable } from './PlayersTable';

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