import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'

import cn from 'classnames'
import s from './AuthModal.module.scss'

export type InputProps = {
  onChange?: (newValue: string) => void
  initValue?: string | number
}

export const Input: FC<InputProps> = ({ onChange, initValue = '' }) => {
  const [value, setValue] = useState(initValue)

  useEffect(() => {
    setValue(initValue)
  }, [initValue])


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange?.(newValue)
    setValue(newValue)
  }

  return <input type="text" value={value} onChange={handleChange} />
}

interface AuthModalProps {
  onCotinue: (email: string) => void
}

interface AuthModal {
  email: string
}

export const AuthModal: FC<AuthModalProps> = ({ onCotinue }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthModal>()


  const onSubmit: SubmitHandler<AuthModal> = (formdata: AuthModal) => {
    onCotinue(formdata.email)
    console.log(formdata)
  }

  return <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
    <Controller
      name='email'
      control={control}
      rules={{
        required: 'Email is required'
      }}
      render={({ field: { onChange, value } }) => (
        <Input initValue={value} onChange={onChange} />
      )}
    />
    <button>Log in</button>
  </form>
}