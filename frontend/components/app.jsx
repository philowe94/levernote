import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './sessionforms/login_form_container';
import SignupFormContainer from './sessionforms/signup_form_container';
import SplashContent from './splash_content/splash_content';
import Main from './main/main';


import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route, Switch, Link} from 'react-router-dom';


const App = () => (
    <div>
        <AuthRoute exact path="/" component={NavBarContainer} />
        <AuthRoute exact path="/" component={SplashContent} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/notes" component={Main} />
        <ProtectedRoute path="/notebooks" component={Main} />
        <ProtectedRoute path="/tags" component={Main} />

    </div>
)

export default App