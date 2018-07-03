import React from 'react';
import { Comment } from 'semantic-ui-react';
import avatar from './img/image.png';

const CommentItem = () => (
  <Comment>
    <Comment.Avatar src={avatar} />
    <Comment.Content>
      <Comment.Author as="a">Matt</Comment.Author>
      <Comment.Metadata>
        <div>Today at 5:42PM</div>
      </Comment.Metadata>
      <Comment.Text>Great Comment</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

export default CommentItem;
