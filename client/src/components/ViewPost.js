import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Item, Loader } from 'semantic-ui-react';
import PostItem from './PostItem';
import Comments from './Comments';
import * as postActions from '../actions/postActions';

class ViewPost extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    post: PropTypes.shape({
      _id: PropTypes.string,
      creator: PropTypes.shape({ nick: PropTypes.string }),
      subject: PropTypes.string,
      content: PropTypes.string,
      likes: PropTypes.number,
      dislikes: PropTypes.number,
      date: PropTypes.string
    }).isRequired,
    viewPost: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }).isRequired
  };

  componentDidMount() {
    const { viewPost, match } = this.props;
    viewPost(match.params.id);
  }

  render() {
    const {
      loading,
      post: { _id, creator, subject, content, likes, dislikes, created }
    } = this.props;
    if (!_id) return null;
    return (
      <Container style={{ minHeight: 400 }}>
        <Item.Group>
          {!loading ? (
            <PostItem
              subject={subject}
              content={content}
              likes={likes}
              dislikes={dislikes}
              author={creator.nick}
              date={created}
              id={_id}
            />
          ) : (
            <Loader active inline="centered" size="massive">
              Loading Post ...
            </Loader>
          )}
        </Item.Group>
        <Comments/>
      </Container>
    );
  }
}

const mapStateToProps = ({ post }) => ({ post: post.post, ...post });

export default connect(
  mapStateToProps,
  postActions
)(ViewPost);
