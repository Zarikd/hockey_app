import { FC, useState } from 'react';
import s from './Header.module.scss';
import { Auth, Gamburger } from '../Icons';
import cn from 'classnames'
import { AuthModal } from '../Modals';
import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { setAuth, setLogin } from '@/src/store/slices/auth';

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = (
  { className,
  }
) => {
  const headerClass = cn(s.headerWrapper, className)

  const [isModalActive, setModal] = useState<boolean>(false)
  const setModalHandler = () => {
    setModal(prev => !prev)
  }
  const [isAuthModalActive, setAuthModal] = useState<boolean>(false)
  const setAuthModalHandler = () => {
    setAuthModal(prev => !prev)
  }

  // const [email, setEmail] = useState<string>('')

  const dispatch = useAppDispatch()
  const continueWithEmail = (email: string) => {
    dispatch(setAuth())
    dispatch(setLogin(email))
  }

  const handleContinue = () => { }

  return (
    <div className={headerClass}>
      <Gamburger onClick={setModalHandler} />
      <Auth onClick={setAuthModalHandler} />
      {isModalActive &&
        <div className={s.dropMenu}>
          List of menu
        </div>
      }
      {isAuthModalActive &&
        <AuthModal onCotinue={continueWithEmail} onClose={() => setAuthModal(false)} />
      }
    </div>);
};
