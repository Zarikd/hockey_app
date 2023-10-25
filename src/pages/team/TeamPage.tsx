import { Button } from '@/src/components/Button/Button';
import { FC, useState } from 'react';
import { ChoosePlayer } from './ChoosePlayer';


export const TeamPage = () => {
  const [isChooseActive, setChooseActive] = useState<boolean>(false)
  const toogleChooseActive = () => {
    setChooseActive(prev => !prev)
  }
  return (
    <div>
      <Button onClick={toogleChooseActive}>Choose player</Button>
      {isChooseActive && <ChoosePlayer onClose={() => setChooseActive(false)} />}
    </div>
  );
}

