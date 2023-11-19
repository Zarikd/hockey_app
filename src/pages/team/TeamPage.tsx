import { Button } from '@/components/Button/Button';
import { FC, useEffect, useState } from 'react';
import { ChoosePlayer } from './ChoosePlayer';
import { fetchPlayers, savePlayer } from '@/store/thunks/players';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { Player } from '@/store/slices/players';


export const TeamPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchPlayers())
  }, [dispatch])
  const players = useAppSelector(state => state.players.playersList)


  const [isChooseActive, setChooseActive] = useState<boolean>(false)
  const [gamePosition, setGamePosition] = useState<string>('')


  const handleSetGamePosition = (e: any) => {
    setGamePosition(e.target.id)
    setChooseActive(prev => !prev)
  }
  const handleSetPlayer = (player: Player | undefined) => {
    if (player) {
      const newPlayer: Player = {
        ...player,
        playerData: {
          ...player.playerData,
          gamePosition
        }
      }
      dispatch(savePlayer(newPlayer))
    }
  }

  const deletePosition = (player: Player) => {
    const newPlayer: Player = {
      ...player,
      playerData: {
        ...player.playerData,
        gamePosition: ''
      }
    }
    dispatch(savePlayer(newPlayer))
  }


  const buttons = []

  for (let i = 1; i < 6; i++) {
    const player: Player | undefined = players.find(p => p.playerData.gamePosition === i.toString())
    let button;
    if (player) {
      button = <Button onDoubleClick={() => deletePosition(player)} id={`${i}`}>{player.playerData.playerName}</Button>
    } else {
      button = <Button onClick={handleSetGamePosition} id={`${i}`}>{'Choose player'}</Button>
    }

    buttons.push(button)
  }

  return (
    <div>
      {buttons}
      {isChooseActive &&
        <ChoosePlayer
          onClose={() => setChooseActive(false)}
          onPlayerChoosed={handleSetPlayer}
          players={players.filter(p => !p.playerData.gamePosition)}
        />}
    </div>
  );
}

