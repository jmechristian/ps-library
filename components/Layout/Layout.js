import React, { useContext } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Context } from '../../data/context';

const Layout = ({ children }) => {
  const { dark } = useContext(Context);

  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
