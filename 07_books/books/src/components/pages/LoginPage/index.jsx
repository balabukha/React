import React, {Component} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../../forms/LoginForm';
import { login } from '../../../actions';


class LoginPage extends Component {

    // submit = (data) => this.props.login(data).then(() => this.props.history.push('/'));
    submit = data => this.props.login(data).then(() => this.props.history.push("/"));
    // submit = data => { return this.props.login(data).then(() => this.props.history.push("/")); }
    // submit = data => console.log('this.props.login(data)', this.props.login);

    render(){
        return (
        <div>
            <h1>Login Page</h1>
            <LoginForm submit={this.submit}/>
        </div>
        )
    }

};

LoginPage.propTypes = {
    history:PropTypes.shape({
        push:PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, {login})(LoginPage);
