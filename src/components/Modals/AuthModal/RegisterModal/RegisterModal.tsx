import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'

import cn from 'classnames'
import s from './RegisterModal.module.scss'
import { Input, Modal } from 'components'
import { Button } from '../../../Button/Button'
import { AuthLogo, CrossIcon } from '../../../Icons'

interface RegisterModalProps {
  onCotinue: (login: string, password: string, firstName: string, secondName: string, dateBirth: Date | null) => void
  onClose: () => void,
  isActive: boolean
  setActive?: () => void
}

interface RegisterModal {
  login: string,
  password: string,
  firstName: string,
  secondName: string,
  dateBirth: Date | null
}

export const RegisterModal: FC<RegisterModalProps> = ({ onCotinue, onClose, isActive, setActive }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterModal>()


  const onSubmit: SubmitHandler<RegisterModal> = (formdata: RegisterModal) => {
    onCotinue(formdata.login, formdata.password, formdata.firstName, formdata.secondName, formdata.dateBirth)
  }

  return (
    <>
      <Modal onClose={onClose} isCross>
        <div className={cn(s.contentRegWrapper, isActive && s.contentShow)} onClick={e => e.stopPropagation()}>
          <AuthLogo className={s.logoStyle} />
          <div className={s.lable}>Войти <p>в личный кабинет</p></div>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <Controller
              name='login'
              control={control}
              rules={{ required: 'login is required' }}
              render={({ field: { onChange, value } }) => (
                <Input initValue={value} onChange={onChange} type='login' error={errors.login} />
              )}
            />
            <div>
              <Controller
                name='password'
                control={control}
                rules={{ required: 'password is required' }}
                render={({ field: { onChange, value } }) => (
                  <Input initValue={value} onChange={onChange} type='password' error={errors.password} />
                )}
              />
              <div className={s.forgotPass}>Забыли пароль?</div>
            </div>
            <Button type='submit'>Войти</Button>
          </form>
          <div><Button>Регистрация</Button></div>
        </div>
      </Modal>
    </>
  )
}