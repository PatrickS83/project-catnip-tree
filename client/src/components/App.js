import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';

class App extends Component {
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
