import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'

import cn from 'classnames'
import s from './RegisterModal.module.scss'
import { Input, Modal } from '@/components'
import { Button } from '../../../Button/Button'
import { AuthLogo, CrossIcon } from '../../../Icons'
import * as api from '@/api'


interface RegisterModalProps {
  onCotinue: (email: string, password: string, reapetedPassword: string, firstName: string, Name: string, dateBirth: string) => void
  onClose: () => void,
  isActive: boolean
  setActive?: () => void
}

interface RegisterModal {
  email: string,
  password: string,
  reapetedPassword: string,
  secondName: string,
  firstName: string,
  dateBirth: string
}

export const RegisterModal: FC<RegisterModalProps> = ({ onCotinue, onClose, isActive, setActive }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<RegisterModal>()


  const onSubmit: SubmitHandler<RegisterModal> = async (formdata: RegisterModal) => {
    onCotinue(formdata.email, formdata.password, formdata.reapetedPassword, formdata.secondName, formdata.firstName, formdata.dateBirth)
    console.log(formdata)
    await api.users.registerUser(formdata)
  }


  return (
    <>
      <Modal onClose={onClose} isCross>
        <div className={cn(s.contentRegWrapper)} onClick={e => e.stopPropagation()}>
          <AuthLogo className={s.logoStyle} />
          <div className={s.lable}>Регистрация <p>личного кабинета</p></div>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <Controller
              name='email'
              control={control}
              rules={{ required: 'email is required' }}
              render={({ field: { onChange, value } }) => (
                <Input initValue={value} onChange={onChange} type='email' placeholder='e-mail' error={errors.email} />
              )}
            />
            <Controller
              name='password'
              control={control}
              rules={{ required: 'password is required' }}
              render={({ field: { onChange, value } }) => (
                <Input initValue={value} onChange={onChange} type='password' placeholder='пароль' error={errors.password} />
              )}
            />
            <Controller
              name='reapetedPassword'
              control={control}
              rules={{
                required: 'password is required',
                validate: value => value === getValues('password') || 'Password is not the same'
              }}
              render={({ field: { onChange, value } }) => (
                <Input initValue={value} onChange={onChange} type='password' placeholder='повторный пароль' error={errors.reapetedPassword} />
              )}
            />
            <Controller
              name='firstName'
              control={control}
              rules={{ required: 'first name is required' }}
              render={({ field: { onChange, value } }) => (
                <Input initValue={value} onChange={onChange} type='text' placeholder='имя' error={errors.firstName} />
              )}
            />
            <Controller
              name='secondName'
              control={control}
              rules={{ required: 'second name is required' }}
              render={({ field: { onChange, value } }) => (
                <Input initValue={value} onChange={onChange} type='text' placeholder='фамилия' error={errors.secondName} />
              )}
            />
            <Controller
              name='dateBirth'
              control={control}
              rules={{ required: 'date is required' }}
              render={({ field: { onChange, value } }) => (
                <Input initValue={value} onChange={onChange} type='date' error={errors.dateBirth} />
              )}
            />
            <Button type='submit'>Регистрация</Button>
          </form>
          <div>Уже есть аккаунт? <Link href={'/auth'}>Войти</Link></div>
        </div>
      </Modal>
    </>
  )
}