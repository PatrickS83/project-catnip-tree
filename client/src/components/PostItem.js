import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Item, Icon, Label } from 'semantic-ui-react';
import * as authActions from '../actions/authActions';
import * as postActions from '../actions/postActions';

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
    setPostLoading: PropTypes.func.isRequired,
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
    const { id, author, subject, content, likes, dislikes, setPostLoading } = this.props;
    const { liked, disliked } = this.state;

    return (
      <Item id={id}>
        <Item.Image size="small" src="./img/image.png" />

        <Item.Content>
          <Item.Header>
            <Link to={`/viewpost/${id}`} onClick={setPostLoading}>
              {subject}
            </Link>
          </Item.Header>

          <Item.Meta>by {author}</Item.Meta>
          <Item.Description>{content}</Item.Description>
          <Item.Extra>
            <Label as="a" onClick={this.handleLike} style={{ border: '1px solid black' }}>
              <Icon name="thumbs up outline" color={liked ? 'blue' : 'black'} />
              {likes}
            </Label>
            <Label as="a" onClick={this.handledisLike} style={{ border: '1px solid black' }}>
              <Icon name="thumbs down outline" color={disliked ? 'red' : 'black'} />
              {dislikes}
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = {
  ...authActions,
  ...postActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
