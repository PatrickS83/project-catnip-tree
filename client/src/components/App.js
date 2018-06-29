import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as authActions from '../actions/authActions';
import Header from './Header';
import Landing from './Landing';

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
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  authActions
)(App);
