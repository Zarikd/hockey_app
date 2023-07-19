import { Header, Footer } from 'components';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <Link href='/'>
          <h3>Main</h3>
        </Link>
        <Link href='/team'>
          <h3>Team</h3>
        </Link>
        <Link href='/players'>
          <h3>Players</h3>
        </Link>
      </div>
      {children}
      <Footer />
    </div>
  );
};
