import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container, Loader, Item, Header, Divider, Segment } from 'semantic-ui-react';

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

  // Limits string to a certain length specified by the charCount parameter
  // String ---> String
  truncateString = (str, charCount = 280) => {
    if (str.length <= charCount) return str;
    return `${str
      .split('')
      .slice(0, charCount)
      .join('')}...`;
  };

  render() {
    const { posts } = this.props;

    return (
      <Container>
        <Segment textAlign="center" inverted color="teal">
          <Header as="h1">Did you learn something today?</Header>
          <Link to="/posts/createPost">
            <Button content="Share it with others!" size="massive" color="orange" />
          </Link>
        </Segment>
        <Divider />
        <Item.Group divided>
          {posts.length ? (
            posts.map(post => (
              <PostItem
                key={post._id}
                subject={post.subject}
                content={this.truncateString(post.content)}
                likes={post.likes}
                dislikes={post.dislikes}
                author={post.creator.nick}
                date={post.created}
                id={post._id}
                comments={post.comments.length}
              />
            ))
          ) : (
            <Loader active inline="centered" size="massive">
              Loading Posts ...
            </Loader>
          )}
        </Item.Group>
        <Divider />
      </Container>
    );
  }
}

const mapStateToProps = ({ post }) => ({ posts: post.posts });

export default connect(
  mapStateToProps,
  postActions
)(Landing);
