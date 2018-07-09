import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';

const segmentStyle = {
  height: '75vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  marginBottom: '1rem'
};

const h1Style = {
  marginTop: '25%',
  flex: '1',
  fontSize: '6rem'
};

export default () => (
  <Container>
    <Segment style={segmentStyle} inverted color="orange">
      <Header as="h1" textAlign="center" style={h1Style}>
        Ooops!
      </Header>
      <Header as="h3" textAlign="center">
        Error 404 - the page you are looking for does not exist.
      </Header>
    </Segment>
  </Container>
);
