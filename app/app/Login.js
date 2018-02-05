/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button,
  Dimensions
} from 'react-native';
import { graphql, compose } from 'react-apollo';

import Signin from './sign/in'
import Signup from './sign/up'
import queries from './utils/queries';
import getPlaceHolder from './utils/placeHolder'
import updatePlaceHolder from './utils/updatePlaceHolder';

class Login extends Component {
  state = {
    showLogin:true,
    showRegister:false,
    showLostPassword:false,
    argsSignup: {},
    errorSignup: [],
    argsSignin: {},
    errorSignin: [],
  }
  handleChange = (value, name)=>{
    // const argsSignup = this.state.argsSignup
    // argsSignup[name] = value
    // this.setState({argsSignup})
    this.props.updatePH({
        variables: {
          index: name,
          value: value
        }
      })
  }
  handleRegister =  async (args)=>{
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
  }

  render() {
    let {navigation, placeHolder} = this.props;
    console.log(placeHolder);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.form}>
          <Signup args={this.state.argsSignup} navigation={navigation} handleRegister = { this.handleRegister } handleChange = { this.handleChange }/>
        </View>
      </View>
    );
  }
}

export default compose(
  graphql(getPlaceHolder, {
    props: ({ data: { placeHolder, loading } }) => ({
      placeHolder,
      loading
    })
  }),
  graphql(updatePlaceHolder, {name: 'updatePH'}),
  // graphql(queries.mutation.createUser, {name:'createUser'})
  // graphql(queries.mutation.createUser, {name:'createUser'})
)(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
