import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import BodyWrapper from '../Shared/BodyWrapper';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
