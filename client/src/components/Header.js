import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    auth: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        liked: PropTypes.array.isRequired,
        disliked: PropTypes.array.isRequired,
        _id: PropTypes.string.isRequired,
        googleId: PropTypes.string.isRequired,
        joined: PropTypes.string.isRequired
      })
    ])
  };

  static defaultProps = { auth: null };

  renderAuthButton() {
    const { auth } = this.props;
    if (auth) {
      return (
        <Button inverted as="a" href="/auth/logout">
          Log Out
        </Button>
      );
    }
    if (auth === false) {
      return (
        <Button inverted as="a" href="/auth/google">
          Sign in with Google
        </Button>
      );
    }
    return null;
  }

  render() {
    const { auth } = this.props;
    return (
      <Menu fluid inverted>
        <Container>
          <Menu.Item link active>
            <Link to="/">Today I Learned</Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              {auth && <span style={{ marginRight: 10 }}>{auth.nick}</span>}
              {this.renderAuthButton()}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
