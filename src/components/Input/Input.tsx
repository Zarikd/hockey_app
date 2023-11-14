import {
  ChangeEvent,
  FC,
  useEffect,
  useState,
} from 'react'
import cn from 'classnames'


import s from './Input.module.scss'
import { EyeIcon, LoginIcon } from '../Icons'

export type InputProps = {
  className?: string
  initValue?: string | number
  placeholder?: string
  error?: Partial<Error>
  required?: boolean
  type?: 'text' | 'number' | 'password' | 'login' | 'email' | 'date'
  onChange?: (newValue: string) => void
  name?: string
  ref?: HTMLInputElement | null
  autoFocus?: boolean
  disabled?: boolean
  min?: number
  max?: number
}

export const Input: FC<InputProps> = ({
  initValue = '',
  onChange,
  placeholder = '',
  type = 'text',
  className = '',
  name,
  autoFocus,
  disabled,
  error,
  min,
  max,
}) => {
  const [value, setValue] = useState(initValue)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    setValue(initValue)
  }, [initValue])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange?.(newValue)
    setValue(newValue)
  }

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  const inputClass = cn(s.input, className, { [s.error]: error }, { [s.password]: type === 'password' }, { [s.big]: showPassword == false })

  return (
    <div className={s.wrapper}>
      <input
        min={min}
        max={max}
        autoFocus={autoFocus}
        name={name}
        className={inputClass}
        type={showPassword ? 'text' : type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <div className={s.messageError}>{error.message}</div>}
      {type === 'password' && (
        <EyeIcon
          className={s.eyeIcon}
          onClick={toggleShowPassword}
        />
      )}
      {type === 'login' && (
        <LoginIcon
          className={s.loginIcon}
        />
      )}
      {type === 'email' && (
        <LoginIcon
          className={s.loginIcon}
        />
      )}
    </div>
  )
}
