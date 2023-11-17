import { FC, use, useEffect, useState, useLayoutEffect } from 'react';
import { ChoosePlayer } from './ChoosePlayer';
import { fetchPlayers, savePlayer } from '@/src/store/thunks/players';
import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { Player } from '@/src/store/slices/players';
import { TeamMate } from './TeamMate';
import s from './Team.module.scss'
import cn from 'classnames'
import { Arrow, Sticks } from '@/src/components/Icons';
import { PlayerPanel } from './PlayerPanel';


export const TeamPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchPlayers());
  }, [dispatch])
  const players = useAppSelector(state => state.players.playersList)


  const [isChooseActive, setChooseActive] = useState<boolean>(false)
  const [gamePosition, setGamePosition] = useState<string>('')
  const [chainNumber, setChNum] = useState<string>('1')
  const [visible, setVisible] = useState<boolean>(false)

  const handleSetGamePosition = (e: any) => {
    setGamePosition(e.target.id)
    setChooseActive(prev => !prev)
    console.log(players)
  }
  const handleSetPlayer = (player: Player | undefined) => {
    if (player) {
      const newPlayer: Player = {
        ...player,
        playerData: {
          ...player.playerData,
          gamePosition,
          chainNumber
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
        gamePosition: '',
        chainNumber: ''
      }
    }
    dispatch(savePlayer(newPlayer))
  }

  const toogleChainRight = () => {
    if (+chainNumber < 4) {
      setChNum(prev => `${+prev + 1}`)
    } else (setChNum('1'))
  }

  const toogleChainLeft = () => {
    if (+chainNumber > 1) {
      setChNum(prev => `${+prev - 1}`)
    } else (setChNum('4'))
  }


  const teammates = []
  const chainPlayers = players.filter(p => p.playerData.chainNumber === chainNumber) //Missunderstand process of reloading

  for (let i = 1; i < 6; i++) {
    const player: Player | undefined = chainPlayers.find(p => p.playerData.gamePosition === i.toString())
    let teammate;
    if (player) {
      teammate = <TeamMate onDoubleClick={() => deletePosition(player)} id={`${i}`}>{player.playerData.playerName}</TeamMate>
    } else {
      teammate = <TeamMate onClick={handleSetGamePosition} id={`${i}`}>{'Choose player'}</TeamMate>
    }

    teammates.push(teammate)
  }

  const playerPanels = []

  for (let i = 1; i < 7; i++) {
    const player: Player | undefined = chainPlayers.find(p => p.playerData.gamePosition === i.toString())
    let playerPanel;
    if (player) {
      playerPanel = <PlayerPanel firstName={player.playerData.playerName} Name={''} id={`${i}`} />
    }
    else {
      playerPanel = <PlayerPanel firstName={'Пусто'} id={`${i}`} />
    }
    playerPanels.push(playerPanel)
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 200)
    return setVisible(false)
  }, [chainNumber])
  const teammatesWrap = cn(s.teammatesWrapper, { [s.visible]: visible })

  return (
    <>
      <div className={s.teamPageWrapper}>
        <div className={s.arena}>
          <div className={s.sticks}><Sticks sizeW={34} sizeH={34} />{`Звено ${chainNumber}`}</div>
          <div className={s.arrows}>
            <Arrow variant={'left'} onClick={toogleChainLeft} />
            <Arrow onClick={toogleChainRight} />
          </div>
          <div className={teammatesWrap}>
            {teammates}
          </div>
        </div>
        {isChooseActive &&
          <ChoosePlayer
            onClose={() => setChooseActive(false)}
            onPlayerChoosed={handleSetPlayer}
            players={players.filter(p => !p.playerData.gamePosition)}
          />}
      </div>
      <div className={s.playerPanelWrapper}>
        {playerPanels}
      </div>
    </>
  );
}

