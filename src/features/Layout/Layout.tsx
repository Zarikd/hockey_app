import { Header, Footer } from '@/src/components';
import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <h1>Hello Layout</h1>
      {children}
      <Footer />
    </div>
  );
};
