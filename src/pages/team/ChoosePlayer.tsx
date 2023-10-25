import { Modal } from '@/src/components'
import { useAppSelector } from '@/src/shared/hooks/redux';
import { FC, useState } from 'react';
import Select from 'react-select';


interface ChoosePlayerProps {
  onClose: () => void
}


type searchPlayers = {
  label: string
  value: number
}

export const ChoosePlayer: FC<ChoosePlayerProps> = ({ onClose }) => {


  const players = useAppSelector(state => state.players.playersList)

  const searchPlayers = players.map((item, index) => { return { label: item.playerData.playerName, value: index + 1, } })

  const [items, setItems] = useState<searchPlayers | null>();

  console.log(searchPlayers);

  const handleOption = (selections: searchPlayers | null) => {
    setItems(selections);
  };

  return (
    <Modal onClose={onClose}>
      <div onClick={e => e.stopPropagation()}>
        <Select options={searchPlayers} onChange={handleOption} />
      </div>
    </Modal>
  )
}