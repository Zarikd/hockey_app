import { Header, Footer } from '@/components';
import { FC, ReactNode } from 'react';
import s from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.layoutWarapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
