import React from "react";
import { connect } from 'react-redux';
import {Route, Redirect, Link} from 'react-router-dom';

import { withRouter } from "react-router";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    // Redirect to the notes page if the user is authenticated
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/notes" />
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          // Redirect to the login page if the user is already authenticated
          <Redirect to="/" />
        )
      }
    />
  );
  
const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};
  
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));