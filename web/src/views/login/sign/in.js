import React from 'react';
import {
  TextInput,
  Text,
  TouchableHighlight,
  View,
  Dimensions
} from 'react-native';
import { contentInput, input, btn, textBtn } from '../utils/style'


export default ({}) => {

  return(
    <View>
      <View style={styles.contentInput}>
        <TextInput
          style={[styles.input]}
          keyboardType = "email-address"
          onChangeText={(email) => {}}
          placeholder = "Email"
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={[styles.contentInput]}>
        <TextInput
          style={[styles.input]}
          secureTextEntry={true}
          onChangeText={(password) => {}}
          placeholder = "Password"
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={{alignItems:'center'}}>
        <View style={styles.btn}>
          <TouchableHighlight
            underlayColor="#1d7fce"
            onPress={() => { }} >
            <View style={{alignItems:'center'}}>
              <Text style={styles.textBtn}>
                Iniciar sesión
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}
