import { connect } from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {signup} from '../../actions/session_actions';

import SessionForm from './session_form';

//map errors from state to props
//also throw in a formType string and a link for signing up 
// (to swap from login form to signup form)
const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navText: 'Already have an account?',
        navLink: <Link to="/login" className="switch">Sign in</Link>
    }
}

//map the login action from session_actions to the component
//call it processForm - so that it can be called the same thing 
// in the signup container - so the form can use both of them depending
const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);