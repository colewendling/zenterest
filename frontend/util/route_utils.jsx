import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  id: state.session.currentUser ? state.session.currentUser.id : '',
  loggedIn: Boolean(state.session.currentUser)
});


const Auth = ({ loggedIn, path, exact, component: Component, id}) => {
  return (
  <Route
    exact={exact}
    path={path}
    render={props => (
      loggedIn ? <Redirect to={`/users/${id}/pins`} /> : <Component {...props} />
    )}
  />)
    };

const Protected = ({ loggedIn, exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to='/' />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));