import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';
import * as postActions from '../actions/postActions';

class Landing extends Component {
  static propTypes = {
    getPosts: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    return (
      <Container>
        <h1>Welcome to the Landing Page</h1>
        <Link to="/posts/createPost">
          <Button content="Create a post!" />
        </Link>
      </Container>
    );
  }
}

export default connect(
  null,
  postActions
)(Landing);
