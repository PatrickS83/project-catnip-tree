import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  if (auth === null) return null;
  return (
    <Route
      {...rest}
      render={props => (auth ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
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

PrivateRoute.defaultProps = { auth: null };

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PrivateRoute);
