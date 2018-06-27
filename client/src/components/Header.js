import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Menu } from 'semantic-ui-react';

class Header extends Component {
  render() {
    return (
      <Menu inverted size="large">
        <Container>
          <Menu.Item as="a" active>
            {this.props.auth ? this.props.auth._id : null}
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item position="right">
            <Button inverted as="a" href="/auth/google">
              Sign in with Google
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
