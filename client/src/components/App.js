import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as authActions from '../actions/authActions';

class App extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    return <div className="App">React App is working correctly!</div>;
  }
}

export default connect(
  null,
  authActions
)(App);
