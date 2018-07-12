import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Loader, Item } from 'semantic-ui-react';

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

  renderPosts = () => {
    const { posts } = this.props;
    if (!posts.length)
      return (
        <Loader active inline="centered" size="massive">
          Loading Posts ...
        </Loader>
      );

    // posts finished loading from db
    return posts.map(post => (
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
    ));
  };

  render() {
    return <Item.Group divided>{this.renderPosts()}</Item.Group>;
  }
}

const mapStateToProps = ({ post }) => ({ posts: post.posts });

export default connect(
  mapStateToProps,
  postActions
)(Landing);
