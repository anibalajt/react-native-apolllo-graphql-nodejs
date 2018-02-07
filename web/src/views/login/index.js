/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import Sample from "../../components/sample";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Signup from "./sign/up";

const ADD_USER = gql`
  mutation addUser($rpassword: String!, $password: String!, $email: String!) {
    addUser(rpassword: $rpassword, password: $password, email: $email) @client {
      id
    }
  }
`;

class Login extends Component {
  state = {
    showLogin: true,
    showRegister: false,
    showLostPassword: false,
    argsSignup: {},
    errorSignup: [],
    argsSignin: {},
    errorSignin: []
  };
  handleChange = (e, name) => {
    const argsSignup = this.state.argsSignup;
    argsSignup[name] = e.target.value;
    this.setState({ argsSignup });
  };
  handleRegister = async args => {
    let r = await this.props.add_user({ variables: args });
    console.log("response: ", r);
  };

  render() {
    return (
      <div style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <div>Hola mundo</div>
        <Signup
          args={this.state.argsSignup}
          handleRegister={this.handleRegister}
          handleChange={this.handleChange}
        />
        <br />
        <br />
        <Sample />
      </div>
    );
  }
}

export default graphql(ADD_USER, { name: "add_user" })(Login);
