import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'

import cn from 'classnames'
import s from './AuthModal.module.scss'
import { Input, Modal } from 'components'
import { Button } from '../../Button/Button'
import { CrossIcon } from '../../Icons'

interface AuthModalProps {
  onCotinue: (login: string, password: string) => void
  onClose: () => void,
  isActive: boolean
  setActive: () => void
}

interface AuthModal {
  login: string,
  password: string
}

export const AuthModal: FC<AuthModalProps> = ({ onCotinue, onClose, isActive, setActive }) => {
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
      {/* <Modal onClose={onClose} isCross={true} className={cn(!isActive && s.modalWrapper)}> */}
      <div className={cn(s.contentWrapper, isActive && s.contentShow)}>
        <CrossIcon onClick={setActive} className={s.cross} />
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
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
          <Button type='submit'>Log in</Button>
        </form>
      </div>
      {/* </Modal> */}
    </>
  )
}