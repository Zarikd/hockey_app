import { FC, ReactNode } from 'react';
import s from './Modal.module.scss'
import { CrossIcon } from '../Icons';
import cn from 'classnames'


interface Modal {
  children: ReactNode;
  onClose: () => void;
  isCross?: boolean,
  className?: string,
}

export const Modal: FC<Modal> = ({ children, onClose, isCross = false, className }) => {
  const modalClass = cn(s.modalwrapper, className)

  return <div className={modalClass} onClick={onClose}>
    {isCross && <CrossIcon className={s.icon} onClick={onClose} />}
    {children}
  </div>
}