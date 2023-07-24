import { FC, useState } from 'react';
import s from './Header.module.scss';
import { Auth, Gamburger } from '../Icons';
import cn from 'classnames'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = (
  { className,
  }
) => {
  const headerClass = cn(s.headerWrapper, className)

  const [isModalActive, setModal] = useState<boolean>(false)
  const setModalHendler = () => {
    setModal(prev => !prev)
  }

  return (
    <div className={headerClass}>
      <Gamburger onClick={setModalHendler} />
      <Auth onClick={() => { }} />
      {isModalActive ?
        <div className={s.dropMenu}>
          List of menu
        </div>
        :
        <></>
      }
    </div>);
};
