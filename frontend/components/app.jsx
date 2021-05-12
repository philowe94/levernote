import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './sessionforms/login_form_container';
import SignupFormContainer from './sessionforms/signup_form_container';
import SplashContent from './splash_content/splash_content';

import {Route, Switch, Link} from 'react-router-dom';

const App = () => (
    <div>
        <header className="header">
            <Route exact path="/" component={NavBarContainer} />
        </header>

        <Route exact path="/" component={SplashContent} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
)

export default App