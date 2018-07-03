import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import moment from 'moment';

const CommentItem = ({ user, created, text, nick }) => (
  <Comment>
    {/* TODO: allow users to choose avatars */}
    <Comment.Avatar src={`https://api.adorable.io/avatars/100/${user}.png`} />
    <Comment.Content>
      {/* preventdefault because profiles are not implemented yet
      TODO: implement profiles */}
      <Comment.Author as="a" href={`/profile/${user}`} onClick={e => e.preventDefault()}>
        {nick}
      </Comment.Author>
      <Comment.Metadata>
        <div>{moment(created).fromNow()}</div>
      </Comment.Metadata>
      <Comment.Text>{text}</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

CommentItem.propTypes = {
  user: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  nick: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CommentItem;
