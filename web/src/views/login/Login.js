/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

// import Signin from "./sign/in";
import Signup from "./sign/up";
import Sample from "../../components/sample";
// import queries from "./utils/queries";
import getPlaceHolder from "../../utils/placeHolder";
import updatePlaceHolder from "../../utils/updatePlaceHolder";

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
    this.props.updatePH({
      variables: {
        index: name,
        value: e.target.value
      }
    });
  };
  handleRegister = async args => {
    console.log("handleRegister: ");

    // const response = await this.props.createUser({
    //   variables: args
    // });
    // console.log(response.data);
    // const {errors, success, token} = response.data.createUser;

    // if(!success){
    //   this.setState({errorSignup:errors})
    // }else{
    //   this.props.history.push("/")
    // }
  };

  render() {
    let { navigation } = this.props;

    return (
      <div style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <div>
          <Signup
            args={this.state.argsSignup}
            navigation={navigation}
            handleRegister={this.handleRegister}
            handleChange={this.handleChange}
          />
          <Sample />
        </div>
      </div>
    );
  }
}

/* <Signup
      args={this.state.argsSignup}
      navigation={navigation}
      handleRegister={this.handleRegister}
      handleChange={this.handleChange}
    />
  <Sample /> */
// export default Login;
export default compose(
  // graphql(getPlaceHolder, {
  //   props: ({ data: { placeHolder, loading } }) => ({
  //     placeHolder,
  //     loading
  //   })
  // }),
  graphql(updatePlaceHolder, { name: "updatePH" })
)(Login);
