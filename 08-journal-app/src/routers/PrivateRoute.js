import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  console.log({ ...rest });
  return (
    <Route
      {...rest}
      component={() => (isLoggedIn ? <Component /> : <Redirect to="/auth/login" />)}
    />
  );
};

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
