import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as authActions from '../actions/authActions';
import Layout from './Layout';
import Landing from './Landing';
import PrivateRoute from './PrivateRoute';
import CreatePost from './CreatePost';
import ViewPost from './ViewPost';

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
          <Route path="/viewpost/:id" component={ViewPost} />
          <Switch>
            <PrivateRoute path="/posts/createPost" component={CreatePost} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default connect(
  null,
  authActions
)(App);
