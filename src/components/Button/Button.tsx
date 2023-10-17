import { FC, ReactNode, useState } from 'react'
import cn from 'classnames'

import s from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  type?: 'button' | 'reset' | 'submit'
  variant?:
  | 'standart'
  | 'primary'
  className?: string
  onClick?: () => void
  isDisabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'standart',
  className,
  onClick,
  isDisabled = false
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
    >
      {children}
    </button>
  )
}
