import React from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ marginTop: '4em', padding: '2em 0em' }} color="blue">
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Impressum</List.Item>
              <List.Item as="a">Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Placeholder 1</List.Item>
              <List.Item as="a">Placeholder 2</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Today I Learned
            </Header>
            <p>
              Small messageboard learning-project to familiarize myself with authentification,
              Node.js and React/Redux
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
