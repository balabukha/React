import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SignupForm from "../../forms/SignupForm";
import { signup } from "../../../actions";

class SignUpPage extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div>
        <h3>Please register</h3>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignUpPage);
