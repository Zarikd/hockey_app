import { FC, ReactNode, useState } from 'react'
import cn from 'classnames'

import s from './Team.module.scss'
import { Button } from '@/src/components/Button/Button'

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
  return (
    <div id={id} className={teamMateClass}>
      <div className={s.avatar}>{avatar ? avatar : null}</div>
      <Button onClick={onClick} onDoubleClick={onDoubleClick}>
        {children}
      </Button>
    </div>
  )
}
