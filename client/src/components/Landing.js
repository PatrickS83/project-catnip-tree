import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Landing Page</h1>
        <Link to="/posts/createPost">
          <Button content="Create a post!" />
        </Link>
      </div>
    );
  }
}

export default Landing;
