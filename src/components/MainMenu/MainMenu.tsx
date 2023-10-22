import { FC } from 'react';
import s from './MainMenu.module.scss';
import cn from 'classnames'
import { AuthLogo, CrossIcon, Helm, Jarcy, Sticks } from '../Icons';
import Link from 'next/link';


interface MainMenuProps {
  onClose: () => void,
  isActive: boolean
  setActive: () => void
}


export const MainMenu: FC<MainMenuProps> = ({
  onClose,
  isActive,
  setActive
}) => {
  return (
    <div className={cn(s.MainMenuWrapper, isActive && s.contentShow)}>
      <CrossIcon onClick={onClose} className={s.cross} />
      <ul className={s.ul}>
        <Link href='/auth'> <li onClick={onClose}><AuthLogo sizeW={41} sizeH={30} />Личный кабинет</li></Link>
        <Link href='/'><li onClick={onClose}><Helm />Главная</li></Link>
        <Link href='/team'><li onClick={onClose}><Sticks />Звенья</li></Link>
        <Link href='/players'><li onClick={onClose}><Jarcy />Состав</li></Link>
      </ul>
    </div>
  );
};
