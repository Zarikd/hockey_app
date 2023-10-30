import { Modal } from '@/src/components'
import { Button } from '@/src/components/Button/Button';
import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { Player } from '@/src/store/slices/players';
import { fetchPlayers } from '@/src/store/thunks/players';
import { FC, useEffect, useState } from 'react';
import Select from 'react-select';


interface ChoosePlayerProps {
  onClose: () => void
  onPlayerChoosed: (player: Player | undefined) => void
  players: Player[]
}


type playerOptions = {
  label: string
  value: string
}

export const ChoosePlayer: FC<ChoosePlayerProps> = ({ onClose, onPlayerChoosed, players }) => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchPlayers())
  }, [dispatch])


  const listOptions = players.map((item) => { return { label: item.playerData.playerName, value: item.uuidPlayer, } })

  const [choosedPlayer, setChoosedPlayer] = useState<playerOptions | null>();

  const handleOption = (choosedPlayer: playerOptions | null) => {
    setChoosedPlayer(choosedPlayer);
  };

  const _onPlayerChoosed = () => {
    const player: Player | undefined = players.find(p => p.uuidPlayer === choosedPlayer?.value)
    onPlayerChoosed(player);
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <div onClick={e => e.stopPropagation()}>
        <Select options={listOptions} onChange={handleOption} />
        <Button onClick={_onPlayerChoosed}>Выбрать</Button>
      </div>
    </Modal >
  )
}