import { FC, ReactNode, useState } from 'react'
import cn from 'classnames'

import s from './Team.module.scss'
import Avatar from '../../../public/images/avatar.svg'
import Image from 'next/image'

interface PlayerPanelProps {
  firstName?: string | null
  Name?: string | null
  id: string
  avatar?: ReactNode
}

export const PlayerPanel: FC<PlayerPanelProps> = ({
  firstName,
  Name,
  id,
  avatar
}) => {
  const avtarStyle = {
    width: '40px',
    height: '38px',
    borderRadius: '50%',
    border: '2px solid #FFF',
  }

  return (
    <div className={s.playerPanelContent}>
      {avatar ? avatar : <Image src={Avatar} alt='avatar' style={avtarStyle} />}
      <div className={s.playerName}>
        {firstName ? firstName : ''}
        <p>
          {Name ? Name : ''}
        </p>
      </div>
      <div className={s.positionPanel}>
        <svg width="137" height="42" viewBox="0 0 137 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector 2" d="M121.664 0H0V43H121.664L137 20.2644L121.664 0Z" fill="#BB0000" />
        </svg>
        <span>
          {+id < 4 && 'НАПАДЮЩИЙ'}
          {+id >= 4 && +id < 6 && 'ЗАЩИТНИК'}
          {+id == 6 && 'ВРАТАРЬ'}
        </span>
      </div>
    </div>)
}