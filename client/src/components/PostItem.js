import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Item, Icon, Label } from 'semantic-ui-react';
import moment from 'moment';
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
    date: PropTypes.string.isRequired,
    likePost: PropTypes.func.isRequired,
    dislikePost: PropTypes.func.isRequired,
    setPostLoading: PropTypes.func.isRequired,
    comments: PropTypes.number.isRequired,
    auth: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        liked: PropTypes.arrayOf(PropTypes.string).isRequired,
        disliked: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ]).isRequired
  };

  state = { liked: false, disliked: false };

  // check if user has liked or disliked a post and set the state accordingly
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

  // display the correct comment description depending on the amount of comments
  // number ---> string
  renderCommentInfo = (amount = 0) => {
    if (amount === 0) return 'no comments yet';
    if (amount === 1) return '1 comment';
    return `${amount} comments`;
  };

  render() {
    const {
      id,
      author,
      subject,
      content,
      likes,
      dislikes,
      setPostLoading,
      date,
      comments
    } = this.props;
    const { liked, disliked } = this.state;
    const likedColor = liked ? 'blue' : 'black';
    const dislikedColor = disliked ? 'red' : 'black';

    return (
      <Item id={id}>
        <Item.Image size="small" src={`https://api.adorable.io/avatars/100/${id}.png`} />

        <Item.Content>
          <Item.Header>
            <Link to={`/viewpost/${id}`} onClick={setPostLoading}>
              {subject}
            </Link>
          </Item.Header>

          <Item.Meta>
            Posted {moment(date).fromNow()} by {author}
          </Item.Meta>
          <Item.Description>{content}</Item.Description>
          <Item.Extra>
            <Label as="a" onClick={this.handleLike} style={{ border: `1px solid ${likedColor}` }}>
              <Icon name="thumbs up outline" size="large" color={likedColor} />
              {likes}
            </Label>
            <Label
              as="a"
              onClick={this.handledisLike}
              style={{ border: `1px solid ${dislikedColor}` }}
            >
              <Icon name="thumbs down outline" size="large" color={dislikedColor} />
              {dislikes}
            </Label>
          </Item.Extra>
          <Link to={`/viewpost/${id}`} onClick={setPostLoading}>
            {this.renderCommentInfo(comments)}
          </Link>
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
