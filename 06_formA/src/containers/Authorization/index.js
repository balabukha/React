import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import {
    ADMIN_LOGIN,
    ADMIN_PASSWORD
} from '../../constants'

const styleButton = {
    margin: 36,
};
const input = {
    fontSize: 16
};

class Authorization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            login: '',
            passwordError: '',
            loginError: '',
        };

        this.loginHandleChange = this.loginHandleChange.bind(this);
        this.passwordHandleChange = this.passwordHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    loginHandleChange(e){
        this.setState({
            login: e.target.value
        })
    }

    passwordHandleChange(e){
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();

        if (this.state.login === '') {
            this.setState({
                loginError: 'login is required'
            })
        } else {
            this.setState({
                loginError: ''
            })
        };

        if (this.state.password === '') {
            this.setState({
                passwordError: 'password is required'
            })
        } else {
            this.setState({
                passwordError: ''
            })
        };

        if (this.state.login === ADMIN_LOGIN && this.state.password === ADMIN_PASSWORD) {

            let pass = {
                'login': this.state.login,
                'password': this.state.password
            };
            let serialObj = JSON.stringify(pass); //сериализуем его

            localStorage.setItem('password_1', serialObj );

            this.context.router.push('/admin/clients')
        } else {
            this.context.router.push('/')
        }
    }

    render(){
        return (
            <div className="wrapper">
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="wrap">
                    <h1 className='label'>Admin panel</h1>
                </div>

                <TextField
                    floatingLabelText="Username"
                    type="login"
                    style={input}
                    errorText={this.state.loginError}
                    onChange={this.loginHandleChange}
                    value={this.state.login}
                />

                <TextField
                    floatingLabelText="Password"
                    type="password"
                    errorText={this.state.passwordError}
                    style={input}
                    onChange={this.passwordHandleChange}
                    value={this.state.password}
                />
                <RaisedButton
                    label="Login"
                    primary={true}
                    style={styleButton}
                    type="submit"
                />

            </form>
            </div>
        )
    }
}

Authorization.contextTypes = {
    router: PropTypes.object.isRequired
};


export default Authorization;