import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import CommentItem from './CommentItem';

const CommentExampleComment = () => (
  <Comment.Group>
    <Header as="h3" dividing>
      Comments
    </Header>

    <CommentItem />

    <Form reply>
      <Form.TextArea />
      <Button content="Add Reply" labelPosition="left" icon="edit" color="orange" />
    </Form>
  </Comment.Group>
);

export default CommentExampleComment;
