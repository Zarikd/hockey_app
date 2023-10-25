import { FC, useState } from 'react';
import s from './Header.module.scss';
import { Auth, Gamburger, Logo } from '../Icons';
import cn from 'classnames'
import { AuthModal } from '../Modals';
import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/redux';
import { setAuth, setLogin } from '@/src/store/slices/auth';
import { MainMenu } from '../MainMenu';
import { usePathname } from 'next/navigation';

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

  const path = usePathname()

  return (
    <div className={headerClass}>
      <div className={s.contentWrapper}>
        <Gamburger onClick={setModalHandler} />
        {path !== '/' && <Logo />}
        <Auth onClick={setAuthModalHandler} />
        <MainMenu onClose={() => setModal(false)} isActive={isModalActive} setActive={setModalHandler} />
        <AuthModal onCotinue={continueWithEmail} onClose={() => setAuthModal(false)} isActive={isAuthModalActive} setActive={setAuthModalHandler} />
      </div>
    </div>);
};
