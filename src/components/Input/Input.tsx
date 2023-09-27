import {
  ChangeEvent,
  FC,
  useEffect,
  useState,
} from 'react'
import cn from 'classnames'


import s from './Input.module.scss'

export type InputProps = {
  className?: string
  initValue?: string | number
  placeholder?: string
  error?: Error
  required?: boolean
  type?: 'text' | 'number' | 'password' | 'login'
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

  const inputClass = cn(s.input, className, { [s.error]: error })

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
      {/* {type === 'password' && (
        <EyeIcon
          className={s.eyeIcon}
          isOpen={showPassword}
          onClick={toggleShowPassword}
        />
      )} */}
    </div>
  )
}
