import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import Dashboard from './components/pages/DashboardPage'
import GuestRoute from './components/pages/GuestRoute'
import UserRoute from './components/pages/UserRoute'
import SignUpPage from './components/pages/SignUpPage'
import ForgotPasswordPage from './components/pages/ForgotPasswordPage'

/* eslint-disable */
const App = ({location}) => (
    <div>
        <Route location={location} path='/' exact component={HomePage}/>
        <GuestRoute location={location} path='/login' exact component={LoginPage}/>
        <GuestRoute location={location} path='/forgot_password' exact component={ForgotPasswordPage}/>
        <UserRoute location={location} path='/dashboard' exact component={Dashboard}/>
        <GuestRoute location={location} path='/signup' exact component={SignUpPage}/>
    </div>
);
/* eslint-enable */

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
