import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container, Loader, Item } from 'semantic-ui-react';

import * as postActions from '../actions/postActions';
import PostItem from './PostItem';

class Landing extends Component {
  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <Container>
        <h1>Welcome to the Landing Page</h1>
        <Link to="/posts/createPost">
          <Button content="Create a post!" size="massive" color="orange" />
        </Link>
        <Item.Group divided>
          {posts.length ? (
            posts.map(post => (
              <PostItem
                key={post._id}
                subject={post.subject}
                content={post.content}
                likes={post.likes}
                dislikes={post.dislikes}
                author={post.creator.nick}
                date={post.created}
                id={post._id}
              />
            ))
          ) : (
            <Loader active inline="centered" size="massive">
              Loading Posts ...
            </Loader>
          )}
        </Item.Group>
      </Container>
    );
  }
}

const mapStateToProps = ({ post }) => ({ posts: post.posts });

export default connect(
  mapStateToProps,
  postActions
)(Landing);
