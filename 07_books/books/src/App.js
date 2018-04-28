import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Dashboard from './components/pages/DashboardPage';
import GuestRoute from './components/pages/GuestRoute';
import UserRoute from './components/pages/UserRoute';
import SignUpPage from './components/pages/SignUpPage';
import NewBookPage from './components/pages/NewBookPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import TopNavigation from './components/navigation/TopNavigation';

/* eslint-disable */
const App = ({ location, isAuth }) => (
  <div>
    {isAuth && <TopNavigation />}
    <Route location={location} path="/" exact component={HomePage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute location={location} path="/forgot_password" exact component={ForgotPasswordPage} />
    <UserRoute location={location} path="/dashboard" exact component={Dashboard} />
    <GuestRoute location={location} path="/signup" exact component={SignUpPage} />
    <GuestRoute
      location={location}
      path="/reset_password/:token"
      exact
      component={ResetPasswordPage}
    />
    <UserRoute location={location} path="/books/new" exact component={NewBookPage} />
  </div>
);
/* eslint-enable */

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return { isAuth: !!state.user.email };
}

export default connect(mapStateToProps)(App);
