import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const style = {
  backgroundColor: '#ebedf3',
  // following commands to show footer on bottom of page
  // even when there is not enough content
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
};

const Layout = ({ children }) => (
  <div style={style}>
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
