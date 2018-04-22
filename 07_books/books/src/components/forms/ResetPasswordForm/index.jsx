import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import * as R from "ramda";

import InlineError from "../InlineError";

class SignupForm extends Component {
  state = {
    data: {
      token: this.props.token,
      password: "",
      passwordCheck: ""
    },
    loading: false,
    errors: {}
  };

  handleChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  validation = data => {
    const error = {};
    if (R.length(data.password) === 0)
      error.password = "the password cant be blank";
    if (this.setState.password !== this.state.passwordCheck)
      error.passwordCheck = "the passwords are not the same";
    return error;
  };

  submit = e => {
    e.preventDefault();
    const error = this.validation(this.state.data);
    this.setState({
      errors: error
    });
    if (R.length(R.values(error)) === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.submit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something goes wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
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
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="make it secure"
            value={data.password}
            onChange={this.handleChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Form.Field error={!!errors.passwordCheck}>
          <label htmlFor="password">Password2</label>
          <input
            type="passwordCheck"
            id="passwordCheck"
            name="passwordCheck"
            placeholder="make it secure"
            value={data.passwordCheck}
            onChange={this.passwordCheck}
          />
          {errors.passwordCheck && <InlineError text={errors.passwordCheck} />}
        </Form.Field>
        <Button primary>Signup</Button>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
