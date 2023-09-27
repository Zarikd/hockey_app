import { FC, ReactNode } from 'react';
import s from './Modal.module.scss'


interface Modal {
  children: ReactNode;
  onClose: () => void;
}

export const Modal: FC<Modal> = ({ children, onClose }) => {
  
  return <div className={s.modalwrapper} onClick={onClose}>{children}</div>
}