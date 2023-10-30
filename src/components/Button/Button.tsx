import { FC, ReactNode, useState } from 'react'
import cn from 'classnames'

import s from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  type?: 'button' | 'reset' | 'submit'
  id?: string | undefined
  variant?:
  | 'standart'
  | 'primary'
  className?: string
  onClick?: (e: any) => void
  isDisabled?: boolean
  onDoubleClick?: (e: any) => void

}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'standart',
  className,
  onClick,
  isDisabled = false,
  id,
  onDoubleClick
}) => {

  const buttonClass = cn(s.button, s[variant], className, {
    [s.disabled]: isDisabled,
  })

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      id={id}
      onDoubleClick={onDoubleClick}
    >
      {children}
    </button>
  )
}
