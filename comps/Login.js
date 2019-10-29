import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/LoginStyles';
import { Back } from './SVGComps';



const Login = props => {
  return (
    <View style={styles.background}>

      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack()
          }}>
          <Back fill={'black'} height={25} width={25} />
        </TouchableOpacity>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.header}>Where do you live?</Text>
        </View>
      </View>

      <View>
        <Text style={styles.inputTitle}>Address</Text>
        <TextInput
          style={styles.txtInput}
          placeholder='420 LeBron Street'
        />
        <Text style={styles.inputTitle}>6 Digit Code</Text>
        <TextInput
          style={styles.txtInput}
          placeholder='42069X'
        />
        <TouchableOpacity
          style={styles.forget}
          onPress={() => {
            props.navigation.navigate('Forgot')
          }}
        >
          <Text style={styles.forgetText}>Forgot Digitcode</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.login}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Main')
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
};

export default Login;