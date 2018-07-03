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
    auth: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      nick: PropTypes.string.isRequired
    }).isRequired
  };

  state = { comment: '' };

  handleChange = ({ currentTarget }) =>
    this.setState({ [currentTarget.name]: currentTarget.value });

  render() {
    const { comment } = this.state;
    const {
      createComment,
      post: { _id: postID, comments },
      auth: { _id: userID, nick }
    } = this.props;

    return (
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        {comments.length
          ? comments.map(item => (
              <CommentItem
                key={item._id}
                user={item.user}
                created={item.created}
                nick={nick}
                text={item.text}
              />
            ))
          : null}

        <Form reply onSubmit={() => createComment(postID, { userID, comment })}>
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
