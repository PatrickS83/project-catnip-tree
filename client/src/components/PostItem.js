import React from 'react';
import PropTypes from 'prop-types';
import { Item, Icon, Label } from 'semantic-ui-react';

const PostItem = ({ id, author, subject, content, likes, dislikes }) => (
  <Item as="a" id={id}>
    <Item.Image size="small" src="./img/image.png" />

    <Item.Content>
      <Item.Header>{subject}</Item.Header>
      <Item.Meta>by {author}</Item.Meta>
      <Item.Description>{content}</Item.Description>
      <Item.Extra>
        <Label>
          <Icon name="thumbs up outline" size="large" color="black" />
          {likes}
        </Label>
        <Label>
          <Icon name="thumbs down outline" size="large" color="black" />
          {dislikes}
        </Label>
      </Item.Extra>
    </Item.Content>
  </Item>
);

PostItem.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired
};

export default PostItem;
