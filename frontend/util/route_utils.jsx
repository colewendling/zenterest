import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
          loggedIn ? <Redirect to="/users/:userId/pins" /> : <Component {...props} />
        )}
    />
);

const Protected = ({ loggedIn, path, exact, component: Component }) => (
    <Route
        exact={exact}
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));