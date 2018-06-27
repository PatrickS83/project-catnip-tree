import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as authActions from '../actions/authActions';

import Header from './Header';

class App extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Welcome!</h1>
      </div>
    );
  }
}

export default connect(
  null,
  authActions
)(App);
