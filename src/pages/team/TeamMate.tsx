import { FC, ReactNode, useState } from 'react'
import cn from 'classnames'

import s from './Team.module.scss'
import { Button } from '@/src/components/Button/Button'
import Avatar from '../../../public/images/avatar.svg'
import Image from 'next/image'

interface TeamMateProps {
  children: ReactNode
  id: string | undefined
  className?: string
  onClick?: (e: any) => void
  onDoubleClick?: (e: any) => void
  avatar?: string
}

export const TeamMate: FC<TeamMateProps> = ({
  children,
  id,
  className,
  onClick,
  onDoubleClick,
  avatar
}) => {
  const teamMateClass = cn(className, s.teamMate)
  const avtarStyle = {
    borderRadius: '50%',
    border: '2px solid #011E30',
  }
  return (
    <div className={teamMateClass}>
      {avatar ? avatar : <Image src={Avatar} alt='avatar' style={avtarStyle} />}
      <Button variant={'teammate'} id={id} onClick={onClick} onDoubleClick={onDoubleClick}>
        {children}
      </Button>
    </div>
  )
}
