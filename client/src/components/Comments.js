import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import CommentItem from './CommentItem';
import * as postActions from '../actions/postActions';

class Comments extends Component {
  static propTypes = {
    createComment: PropTypes.func.isRequired,
    post: PropTypes.shape({
      _id: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
    auth: PropTypes.oneOfType([
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        nick: PropTypes.string.isRequired
      }),
      PropTypes.bool
    ]).isRequired
  };

  // comment: the text the user typed in the textarea saved as a String
  state = { comment: '' };

  handleChange = ({ currentTarget }) =>
    this.setState({ [currentTarget.name]: currentTarget.value });

  handleSubmit = () => {
    const { comment } = this.state;
    const {
      createComment,
      post: { _id: postID },
      auth: { _id: userID }
    } = this.props;
    // TODO: improve validation and show meaningful error message
    if (!userID || !comment) return;
    createComment(postID, { userID, comment });
  };

  // creates array of CommentItems if a post has comments
  renderComments() {
    const {
      post: { comments },
      auth: { nick }
    } = this.props;

    if (!comments.length) return <p>No comments yet</p>;
    return comments.map(item => (
      <CommentItem
        key={item._id}
        user={item.user}
        created={item.created}
        nick={nick}
        text={item.text}
      />
    ));
  }

  render() {
    const { comment } = this.state;

    return (
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>

        {this.renderComments()}

        <Form reply onSubmit={this.handleSubmit} style={{ paddingBottom: '2em' }}>
          <Form.TextArea onChange={this.handleChange} name="comment" value={comment} />
          <Button content="Add Reply" labelPosition="left" icon="edit" color="orange" />
        </Form>
      </Comment.Group>
    );
  }
}

const mapStateToProps = ({ post, auth }) => ({ post: post.post, auth });

export default connect(
  mapStateToProps,
  postActions
)(Comments);
