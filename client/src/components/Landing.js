import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Landing Page</h1>
        <Link to="/posts/createPost">
          <button>Create a post!</button>
        </Link>
      </div>
    );
  }
}

export default Landing;
