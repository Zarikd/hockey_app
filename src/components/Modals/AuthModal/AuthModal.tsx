import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'

import cn from 'classnames'
import s from './AuthModal.module.scss'
import { Input, Modal } from 'components'

interface AuthModalProps {
  onCotinue: (login: string, password: string) => void
  onClose: () => void
}

interface AuthModal {
  login: string,
  password: string
}

export const AuthModal: FC<AuthModalProps> = ({ onCotinue, onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthModal>()


  const onSubmit: SubmitHandler<AuthModal> = (formdata: AuthModal) => {
    onCotinue(formdata.login, formdata.password)
    console.log(formdata)
  }

  return (
    <>
      <Modal onClose={onClose}>
        <div onClick={e => e.stopPropagation()}>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name='login'
              control={control}
              rules={{ required: 'login is required' }}
              render={({ field: { onChange, value } }) => (
                <Input initValue={value} onChange={onChange} type='login' error={errors.login} />
              )}
            />
            <Controller
              name='password'
              control={control}
              rules={{ required: 'password is required' }}
              render={({ field: { onChange, value } }) => (
                <Input initValue={value} onChange={onChange} type='password' error={errors.password} />
              )}
            />

            <button>Log in</button>
          </form>
        </div>
      </Modal>
    </>
  )
}