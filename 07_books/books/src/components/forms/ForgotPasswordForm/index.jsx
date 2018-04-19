import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Form, Button, Message } from 'semantic-ui-react';
import validator from 'validator';
import * as R from 'ramda'; 

import InlineError from '../InlineError'

class ForgotPasswordForm extends Component{
    state = {
        data:{
            email: ''
            },
        loading: false,
        errors: {}
    };

    handleChange = e => (
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        })
    );

    validation = (data) => {
        const error = {};
        if (!validator.isEmail(data.email)) error.email = 'wrong email';
        return error;
    };

    submit = () => {
        const error = this.validation(this.state.data);
            this.setState({
                errors: error
            });
            if(R.length(R.values(error)) === 0) {
                this.setState({ loading: true });
                this.props
                    .submit(this.state.data)
                    .catch((err) => this.setState({errors: err.response.data.errors, loading: false}))
                    // .catch(err => console.log('err in login Form', err.response.data.errors))
            }
    };


    render(){
        const { data, errors, loading } = this.state;
        return(
            <Form onSubmit={this.submit} loading={loading}>
                { !!errors.global && <Message negative>{errors.global}</Message>}
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.handleChange}
                    />
                    {  errors.email && <InlineError text={errors.email}/> }
                </Form.Field>
                <Button primary>SEND</Button>
            </Form>
        )
    }   
}

ForgotPasswordForm.propTypes = {
    submit: PropTypes.func.isRequired
  };

export default ForgotPasswordForm;