import React from 'react';
import { Button, Container, Header, Divider, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostList from './PostList';

export default () => (
  <Container>
    <Segment textAlign="center" inverted color="teal">
      <Header as="h1">Did you learn something today?</Header>
      <Link to="/posts/createPost">
        <Button content="Share it with others!" size="massive" color="orange" />
      </Link>
    </Segment>
    <Divider />
    <PostList />
    <Divider />
  </Container>
);
