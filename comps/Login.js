import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, Image } from 'react-native';
import styles from '../styles/LoginStyles';



const Login = () => {
  return (
    <View style={styles.background}>

      <View>
      <Image 
      source={require('../assets/Images/BackArrow.png')}
      />
      <Text style={styles.header}>Where do you live?</Text>
      </View>
      
      <View>
      <Text style={styles.inputTitle}>Address</Text>
      <TextInput
      style={styles.txtInput}
      placeholder='1234 Happy street'
      />
      <Text style={styles.inputTitle}>6 Digit Code</Text>
      <TextInput
      style={styles.txtInput}
      placeholder='123456'
      />
      <TouchableOpacity style={styles.forget}>
          <Text style={styles.forgetText}>Forgot Digitcode</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.login}>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
};

export default Login;