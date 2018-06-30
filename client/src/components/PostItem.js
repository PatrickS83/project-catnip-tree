import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Item, Icon, Label } from 'semantic-ui-react';
import * as authActions from '../actions/authActions';

class PostItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    likePost: PropTypes.func.isRequired,
    dislikePost: PropTypes.func.isRequired,
    auth: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        liked: PropTypes.arrayOf(PropTypes.string).isRequired,
        disliked: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ]).isRequired
  };

  state = { liked: false, disliked: false };

  componentDidMount() {
    const { id, auth } = this.props;
    if (!auth) return;
    const liked = auth.liked.find(postId => id === postId);
    const disliked = auth.disliked.find(postId => id === postId);
    this.setState({ liked, disliked });
  }

  handleLike = () => {
    const { id, likePost, auth } = this.props;
    const { liked } = this.state;
    if (!auth) return;
    likePost(id);
    this.setState({ liked: !liked, disliked: false });
  };

  handledisLike = () => {
    const { id, dislikePost, auth } = this.props;
    const { disliked } = this.state;
    if (!auth) return;
    dislikePost(id);
    this.setState({ disliked: !disliked, liked: false });
  };

  render() {
    const { id, author, subject, content, likes, dislikes } = this.props;
    const { liked, disliked } = this.state;

    return (
      <Item id={id}>
        <Item.Image size="small" src="./img/image.png" />

        <Item.Content>
          <Item.Header as="a">{subject}</Item.Header>
          <Item.Meta>by {author}</Item.Meta>
          <Item.Description>{content}</Item.Description>
          <Item.Extra>
            <Label as="a" onClick={this.handleLike}>
              <Icon name="thumbs up outline" size="large" color={liked ? 'blue' : 'black'} />
              {likes}
            </Label>
            <Label as="a" onClick={this.handledisLike}>
              <Icon name="thumbs down outline" size="large" color={disliked ? 'red' : 'black'} />
              {dislikes}
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  authActions
)(PostItem);
