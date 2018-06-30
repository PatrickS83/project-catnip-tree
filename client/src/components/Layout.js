import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div style={{ backgroundColor: '#ebedf3' }}>
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
