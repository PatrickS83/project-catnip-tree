import React from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ marginTop: 'auto', padding: '2em 0em' }} color="blue">
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Impressum</List.Item>
              <List.Item as="a" href="https://github.com/PatrickS83/project-catnip-tree">
                Github Repo
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h4" inverted>
              Today I Learned - Messageboard
            </Header>
            <p>
              Small messageboard learning-project to familiarize myself with the MERN-Stack
              (MongoDB, Express, React/Redux, NodeJS) and authentification. Goal is to build an
              easy-to-use UI/UX for a pre-school class of a teacher friend of mine.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
