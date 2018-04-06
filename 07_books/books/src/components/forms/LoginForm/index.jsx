import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import validator from 'validator';


import InlineError from '../InlineError'

class LoginForm extends Component{
    state = {
        data:{
            email: '',
            password: ''
        },
        loading: false,
        errors: {
            email:'',
            password: ''
        }
    };

    handleChange = e => (
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        })
    )
    submit = () => {
        if (!validator.isEmail(this.state.data.email)) {
            this.setState({
                errors: {...this.state.errors, email: 'the email is incorrect'}
            })
        } else {
            this.setState({
                errors: {...this.state.errors, email: ''}
            })   
        };

        if (R.length(this.state.errors.password) === 0){
            this.setState({
                errors: {...this.state.errors, password: 'the password cant be blank'}
            })
        } else {
            this.setState({
                errors: {...this.state.errors, password: ''}
            })   
        };
    }

    render(){
        const { data } = this.state;

        return(
            <Form onSubmit={this.submit}>
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.handleChange}
                    />
                    <InlineError text='ee'/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="make it secure"
                        value={data.password}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        )
    }   
};

export default LoginForm;