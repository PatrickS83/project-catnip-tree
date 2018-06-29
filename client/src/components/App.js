import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as authActions from '../actions/authActions';
import Layout from './Layout';
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
        <Layout>
          <Route exact path="/" component={Landing} />
        </Layout>
      </Router>
    );
  }
}

export default connect(
  null,
  authActions
)(App);
