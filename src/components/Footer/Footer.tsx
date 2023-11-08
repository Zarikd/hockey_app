import { FC } from 'react';
import s from './Footer.module.scss';
import { Logo } from '../Icons';

export const Footer = () => {
  return (
    <div className={s.footerWrapper}>
      <div className={s.logoWrapper}>
        <Logo />
        <div>
          <p>хоккейная</p>
          <p>команда</p>
          <p>монолит</p>
        </div>
      </div>
      <ul className={s.contactWrapper}>
        <li>{'телефон: 8 (964) 852-69-63'}</li>
        <li> e-mail: monolithockeyteam@gmail.com</li>
      </ul>
    </div>);
};
