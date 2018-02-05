import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  View,

} from 'react-native';
import { contentInput, input, btn, textBtn } from '../utils/style'


export default ({args, navigation , handleRegister, handleChange}) => {

  return(
    <View>
      <View style={contentInput}>
        <TextInput
          style={[input]}
          keyboardType = "email-address"
          onChangeText={ (text) => { handleChange(text, 'email') }}
          placeholder = "Email"
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={[contentInput]}>
        <TextInput
          style={[input]}
          secureTextEntry={true}
          onChangeText={ (text) => { handleChange(text, 'password') }}
          placeholder = "Password"
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={[contentInput]}>
        <TextInput
          style={[input]}
          secureTextEntry={true}
          onChangeText={ (text) => { handleChange(text, 'rpassword') }}
          placeholder = "Confirmar Password"
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={{alignItems:'center'}}>
        <View style={btn}>
          <TouchableHighlight
            underlayColor="#1d7fce"
            onPress={() => {
              handleRegister(args)
              // navigation.navigate('Details')
            }} >
            <View style={{alignItems:'center'}}>
              <Text style={textBtn}>
                Registrar
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}
